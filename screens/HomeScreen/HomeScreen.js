import { SafeAreaView, Text, View, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text className="text-blue-700 mt-5">
        <View>
          <Image
            source={{
              uri: "https://cdn.britannica.com/47/7247-004-44F420D7/Flag-Uzbekistan.jpg",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
