import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import HeaderComponent from "../components/HeaderComponent";

// Import your image file
import feedbackImage from "../assets/images/feedback.png";

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(3); // Default rating
  const [problems, setProblems] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const handleRatingPress = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    console.log('Feedback submitted:');
    console.log('Rating:', rating);
    console.log('Problems:', problems);
    console.log('Suggestions:', suggestions);
    console.log('Additional Comments:', feedback);

    // Reset fields after submission
    setFeedback('');
    setRating(3);
    setProblems('');
    setSuggestions('');
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderComponent title="Feedback" />
      
      <Text style={styles.instructions}>
        We value your feedback! Please let us know what you think about our app.
      </Text>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={feedbackImage} style={styles.image} />
      </View>
      
      <View style={styles.ratingContainer}>
        <Text style={styles.label}>Rate our app:</Text>
        <View style={styles.ratingButtons}>
          {[1, 2, 3, 4, 5].map((value) => (
            <TouchableOpacity
              key={value}
              style={[styles.ratingButton, rating === value && styles.selectedRatingButton]}
              onPress={() => handleRatingPress(value)}
            >
              <Text style={styles.ratingText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <Text style={styles.label}>Problems Encountered:</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe any problems you encountered"
        value={problems}
        onChangeText={setProblems}
        multiline
      />
      
      <Text style={styles.label}>Suggestions for Improvement:</Text>
      <TextInput
        style={styles.input}
        placeholder="Any suggestions for improvement?"
        value={suggestions}
        onChangeText={setSuggestions}
        multiline
      />
      
      <Text style={styles.label}>Additional Comments:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter any additional comments"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
      
      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  instructions: {
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  ratingContainer: {
    marginBottom: 20,
  },
  ratingButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  ratingButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 50,
    width: 40,
    alignItems: 'center',
  },
  selectedRatingButton: {
    backgroundColor: '#ffd700',
  },
  ratingText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    fontSize: 16,
    color: '#333',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%', // Adjust width as needed
    height: 200, // Adjust height as needed
    resizeMode: 'contain', // Adjust the image's fitting style
  },
  submitButton: {
    backgroundColor: '#000', // Black background color
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fff', // White text color
    fontWeight: 'bold',
  },
});

export default FeedbackScreen;