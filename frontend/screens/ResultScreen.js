import React from "react";
import { View, Text } from "react-native";

const ResultScreen = ({ route }) => {
  const { personalityType } = route.params;

  return (
    <View>
      <Text>Your Personality Type: {personalityType}</Text>
    </View>
  );
};

export default ResultScreen;
