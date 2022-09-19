import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <NavigationContainer>
      <View className="flex-1 items-center justify-center p-4 bg-lime-300">
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
