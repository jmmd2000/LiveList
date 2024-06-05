import { useSignIn } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Pressable, Text, Alert } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import SignInWithOAuth from "~/components/SignInWithOAuth";

const Login = () => {
  return (
    <View style={styles.container}>
      {/* <Spinner visible={loading} /> */}
      <SignInWithOAuth />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
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
  button: {
    margin: 8,
    alignItems: "center",
  },
});

export default Login;
