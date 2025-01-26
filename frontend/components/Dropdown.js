import React, { useState } from "react";
import { View, Text, Picker } from "react-native";

const Dropdown = ({ options, selectedValue, onValueChange }) => (
  <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
    {options.map((option, index) => (
      <Picker.Item key={index} label={option} value={option} />
    ))}
  </Picker>
);

export default Dropdown;
