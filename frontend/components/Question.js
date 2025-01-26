import React from "react";
import { View, Text, RadioButton } from "react-native";

const Question = ({ question, onSelect }) => (
  <View>
    <Text>{question.text}</Text>
    {question.options.map((option, index) => (
      <View key={index}>
        <RadioButton value={option} onPress={() => onSelect(option)} />
        <Text>{option}</Text>
      </View>
    ))}
  </View>
);

export default Question;
