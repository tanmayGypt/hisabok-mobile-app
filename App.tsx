import "./global.css";
import React from "react";
import { Text, View } from "react-native";

const App: React.FC = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
};

export default App;
