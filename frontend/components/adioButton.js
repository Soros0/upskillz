import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const RadioButton = ({ label, selected, onPress }) => (
  <TouchableOpacity style={styles.radioButton} onPress={onPress}>
    <Text>{label}</Text>
    {selected && <Text>✓</Text>}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
});

export default RadioButton;
