import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://192.168.1.5:3000/")
      .then((response) => response.json()) // Make sure to return the result of response.json()
      .then((data) => {
        console.log("Data:", data.message);
        setData(data.message); // Assuming the data is in the format that can be directly displayed
      })
      .catch((error) => console.error("Error:", error));
  }, []); // The empty array ensures this effect only runs once after mount

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, color: "#fff" }}>Data: {data}</Text>
    </View>
  );
}
