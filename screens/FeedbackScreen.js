import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";

const FeedbackScreen = () => {
    const [feedback, setFeedback] = useState('');
  
    const handleSubmit = () => {
      // Handle feedback submission
      console.log('Feedback submitted:', feedback);
    };
  
    return (
      <View style={styles.container}>
        <HeaderComponent title="Feedback" />
        <InputComponent
          placeholder="Enter your feedback"
          value={feedback}
          onChangeText={setFeedback}
        />
        <ButtonComponent title="Submit" onPress={handleSubmit} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      paddingHorizontal: 20,
    },
  });
  
  export default FeedbackScreen;