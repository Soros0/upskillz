// RegisterScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [country, setCountry] = useState("");

  const handleRegister = () => {
    // Validate inputs and call backend API
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
