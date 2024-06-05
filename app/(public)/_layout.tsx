import React from "react";
import { Stack } from "expo-router";
import Drawer from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const PublicLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login"></Stack.Screen>
    </Stack>
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <Drawer
    //     screenOptions={{
    //       headerStyle: {
    //         backgroundColor: "#6c47ff",
    //       },
    //       headerTintColor: "#fff",
    //     }}
    //   >
    //     <Drawer.Screen
    //       name="index" // This is the name of the page and must match the url from root
    //       options={{
    //         drawerLabel: "Home",
    //         title: "Homepage",
    //         drawerActiveBackgroundColor: "#fff",
    //         drawerActiveTintColor: "#cae",
    //       }}
    //     />
    //     {/* <Drawer.Screen
    //       name="test" // This is the name of the page and must match the url from root
    //       options={{
    //         drawerLabel: "Test",
    //         title: "Test page",
    //         drawerActiveBackgroundColor: "#fff",
    //         drawerActiveTintColor: "#cae",
    //       }}
    //     /> */}
    //   </Drawer>
    // </GestureHandlerRootView>
  );
};

export default PublicLayout;
