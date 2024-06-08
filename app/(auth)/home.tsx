import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-expo";
import { InitialUserData } from "~/types";
import { useMutation } from "@tanstack/react-query";
import { createUserIfNotExist } from "~/api/api";
import Spinner from "react-native-loading-spinner-overlay";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  const styles = StyleSheet.create({
    linearGradient: {
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      height: "100%",
      elevation: 3,
      backgroundColor: "transparent",
      display: "flex",
      flexDirection: "row",
    },
  });

  return (
    <LinearGradient colors={["#2e1065", "#4c1d95", "#5b21b6"]} style={styles.linearGradient} start={[0, 1]} end={[1, 0]}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, color: "#fff" }}>Welcome to your home page</Text>
      </View>
    </LinearGradient>
  );
};

export default Home;
