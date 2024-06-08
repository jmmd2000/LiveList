import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { IconNames } from "~/types";
import { LinearGradient } from "expo-linear-gradient";

export default function Button(props: { onPress: () => void; title?: string; icon?: React.ReactNode | undefined; gradient?: string[] }) {
  const { onPress, title = "Save", icon, gradient } = props;

  const styles = StyleSheet.create({
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
    },
    linearGradient: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 12,
      margin: "auto",
      gap: 8,
      height: 50,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: gradient ? "transparent" : "#4c1d95",
      display: "flex",
      flexDirection: "row",
    },
  });

  return (
    <View>
      {gradient && (
        <Pressable onPress={onPress}>
          <LinearGradient colors={gradient} style={styles.linearGradient} start={[0, 1]} end={[0, 0]}>
            {icon}
            <Text style={styles.text}>{title}</Text>
          </LinearGradient>
        </Pressable>
      )}
      {!gradient && (
        <Pressable onPress={onPress} style={styles.linearGradient}>
          {icon}
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      )}
    </View>
  );
}
