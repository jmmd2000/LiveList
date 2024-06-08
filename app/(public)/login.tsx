import { View, StyleSheet, Text } from "react-native";
import SignInWithOAuth from "~/components/SignInWithOAuth";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  return (
    <LinearGradient colors={["#7c3aed", "#6d28d9", "#5b21b6"]} start={[1, 0]} end={[0, 1]} style={styles.linearGradient}>
      <View style={styles.container}>
        <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 16, color: "#fff" }}>LiveList</Text>
        <SignInWithOAuth />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flexDirection: "column",
    gap: 20,
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
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
