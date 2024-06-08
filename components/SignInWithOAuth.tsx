import React, { useCallback, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { StyleSheet } from "react-native";
import Button from "~/components/Button";
import { useOAuth, useUser } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "~/hooks/useWarmUpBrowser";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";
import { createUserIfNotExist } from "~/api/api";
import { InitialUserData, User } from "~/types";
import * as SecureStore from "expo-secure-store";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();

      if (createdSessionId && setActive) {
        setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.error("Session creation error", err);
    }
  }, []);

  return <Button title="Sign in with Google" onPress={onPress} icon={<AntDesign name="google" size={24} color={"white"} />} gradient={["#2e1065", "#4c1d95", "#5b21b6"]} />;
};

export default SignInWithOAuth;
