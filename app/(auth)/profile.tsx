import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useUserContext } from "~/context/userContext";

const Profile = () => {
  const user = useUserContext();

  // Assume user.created_at is a valid Date string or Date object
  const createdAt = new Date(user.created_at);

  // Format the time part
  const timeString = createdAt.toLocaleTimeString("en-GB", {
    hour12: true, // Use 12-hour format
    hour: "2-digit",
    minute: "2-digit",
  });

  // Format the date part
  const dateString = createdAt.toLocaleDateString("en-GB", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });

  // Combine both parts into the desired format
  const formattedDateTime = `${timeString}, ${dateString}`;

  const styles = StyleSheet.create({
    container: {
      marginTop: 60,
      flex: 1,
      justifyContent: "flex-start",
      gap: 0,
      padding: 40,
    },
    inputField: {
      marginVertical: 4,
      height: 50,
      borderWidth: 1,
      borderColor: "#6c47ff",
      borderRadius: 4,
      padding: 10,
      backgroundColor: "#fff",
    },
    linearGradient: {
      height: "100%",
      elevation: 3,
      backgroundColor: "transparent",
    },
  });

  return (
    <LinearGradient colors={["#2e1065", "#4c1d95", "#5b21b6"]} style={styles.linearGradient} start={[0, 1]} end={[1, 0]}>
      <View style={styles.container}>
        {user.first_name && user.last_name && <Text style={{ fontSize: 24, color: "#fff", marginBottom: 10 }}>{`${user.first_name} ${user.last_name}`}</Text>}
        <Text style={{ fontSize: 18, color: "#d1d5db" }}>{user.friendcode}</Text>
        <Text style={{ fontSize: 18, color: "#d1d5db" }}>Joined {formattedDateTime}</Text>
      </View>
    </LinearGradient>
  );
};

export default Profile;
