import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { InitialUserData, User } from "~/types";
import { useMutation } from "@tanstack/react-query";
import { createUserIfNotExist } from "~/api/api";

// Define the UserContext with the type of User or null
const UserContext = createContext<User | null>(null);

// Custom hook to use the UserContext
export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
}

// UserContextProvider component to provide the user data
export function UserProvider({ children }: { children: ReactNode }) {
  const { user } = useUser();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Mutation to create the user if they don't exist
  const { mutate, data } = useMutation({
    mutationFn: createUserIfNotExist,
    onSuccess: (data) => {
      // console.log("Data from context (createUserIfNotExist)", data);
      setCurrentUser(data.data.user);
    },
    onError: (error: any) => {
      console.error("Error creating user:", error);
    },
  });

  // Effect to handle user data once available
  useEffect(() => {
    if (!user) {
      console.log("No user from Clerk");
      return;
    }

    // console.log("User data from Clerk:", user);
    const userData: InitialUserData = {
      google_id: user.id,
      first_name: user.firstName,
      last_name: user.lastName,
      avatar_url: user.imageUrl,
    };

    // Call the mutation to create the user if they don't exist
    mutate(userData);
  }, [user]);

  return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
}
