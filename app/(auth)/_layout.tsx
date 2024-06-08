import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import React from "react";
import Drawer from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BlurView } from "expo-blur";

export const LogoutButton = () => {
  const { signOut } = useAuth();

  const logout = () => {
    signOut();
  };

  return (
    <Pressable onPress={logout} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color={"#fff"} />
    </Pressable>
  );
};

const TabsPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: { backgroundColor: "#171717" },
          drawerType: "back",
          // headerStyle: { backgroundColor: "rgb(23,23,23, 0.5)" },
          headerTransparent: true,
          headerBackground: () => (
            <BlurView
              tint="systemMaterialDark"
              intensity={15}
              experimentalBlurMethod="dimezisBlurView"
              style={{
                flex: 1,
                justifyContent: "center",
                overflow: "hidden",
                backgroundColor: "#171717",
              }}
            />
          ),
          headerTintColor: "#fff",
        }}
      >
        <Drawer.Screen
          name="home" // This is the name of the page and must match the url from root
          redirect={!isSignedIn}
          options={{
            drawerLabel: "Home",
            title: "Homepage",
            drawerActiveBackgroundColor: "#4c1d95",
            drawerActiveTintColor: "#a78bfa",
            drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="profile" // This is the name of the page and must match the url from root
          redirect={!isSignedIn}
          options={{
            drawerLabel: "Profile",
            title: "Profile",
            drawerActiveBackgroundColor: "#4c1d95",
            drawerActiveTintColor: "#a78bfa",
            drawerIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />, // This is the icon for the drawer
            headerRight: () => <LogoutButton />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
    // <Tabs
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: "#6c47ff",
    //     },
    //     headerTintColor: "#fff",
    //   }}
    // >
    //   <Tabs.Screen
    //     name="home"
    //     options={{
    //       headerTitle: "Home",
    //       tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
    //       tabBarLabel: "Home",
    //     }}
    //     redirect={!isSignedIn}
    //   />
    //   <Tabs.Screen
    //     name="profile"
    //     options={{
    //       headerTitle: "My Profile",
    //       tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
    //       tabBarLabel: "My Profile",
    //       headerRight: () => <LogoutButton />,
    //     }}
    //     redirect={!isSignedIn}
    //   />
    // </Tabs>
  );
};

export default TabsPage;
