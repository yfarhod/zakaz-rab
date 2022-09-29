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
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://cdn.britannica.com/47/7247-004-44F420D7/Flag-Uzbekistan.jpg",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View>
          <Text className="font-bold text-gray-400 text-xs">
            Заказать сейчас
          </Text>
          <Text className="font-bold text-xl">Местоположение</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
