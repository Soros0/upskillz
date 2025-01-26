import React, { useState } from "react";
import { View, Button } from "react-native";
import Question from "../components/Question";
import axios from "axios";

const questions = [
  { id: 1, text: "Quel est votre principal objectif professionnel ?", options: ["Créer quelque chose d'innovant", "Résoudre des problèmes complexes"] },
  // Add all 20 questions here
];

const QuizScreen = ({ navigation }) => {
  const [responses, setResponses] = useState({});

  const handleSubmit = async () => {
    const userId = "user_id_from_auth"; // Replace with actual user ID
    const response = await axios.post("http://localhost:5000/api/quiz/submit", { userId, responses });
    navigation.navigate("Result", { personalityType: response.data.personalityType });
  };

  return (
    <View>
      {questions.map((q) => (
        <Question key={q.id} question={q} onSelect={(option) => setResponses({ ...responses, [q.id]: option })} />
      ))}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default QuizScreen;
