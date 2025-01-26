import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import axios from "axios";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      const token = response.data.token;
      // Save token to AsyncStorage or context
      navigation.navigate("Quiz");
    } catch (error) {
      Alert.alert("Error", "Invalid credentials");
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
