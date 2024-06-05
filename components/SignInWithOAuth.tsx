import React, { useCallback } from "react";
import * as WebBrowser from "expo-web-browser";
import { StyleSheet } from "react-native";
import Button from "~/components/Button";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "~/hooks/useWarmUpBrowser";

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
      console.error("OAuth error", err);
    }
  }, []);

  return <Button title="Sign in with Google" onPress={onPress} />;
};

const styles = StyleSheet.create({
  button: {
    margin: 8,
    alignItems: "center",
    width: 200,
    height: 50,
  },
});

export default SignInWithOAuth;
