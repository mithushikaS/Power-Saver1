import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      key: '1',
      title: 'Welcome to PowerSaver',
      description: 'Save energy and reduce your bills.',
      image: require('../assets/images/slide1.png')
    },
    {
      key: '2',
      title: 'Track Your Energy Usage',
      description: 'Monitor your daily energy consumption.',
      image: require('../assets/images/slide2.png')
    },
    {
      key: '3',
      title: 'Get Daily Energy Saving Tips',
      description: 'Receive tips to save energy efficiently.',
      image: require('../assets/images/slide3.png')
    },
  ];

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.replace('Login');
    }
  };

  const renderPagination = () => {
    return (
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === currentIndex ? '#4CAF50' : '#ccc' },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <ImageBackground source={require('../assets/images/background.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.slide}>
          <Image source={slides[currentIndex].image} style={styles.image} />
          <Text style={styles.title}>{slides[currentIndex].title}</Text>
          <Text style={styles.description}>{slides[currentIndex].description}</Text>
        </View>
        {renderPagination()}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    width: 600, // Reduce the width to 90% of the screen width
    height: 850, // Reduce the height to 90% of the screen height
    justifyContent: "center",
    alignSelf: "center", // Center the background image
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 80,
  },
  button: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default OnboardingScreen;
