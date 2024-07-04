import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";

const OnboardingScreen = () => {
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const slides = [
      { key: '1', title: 'Welcome to PowerSaver', image: require('../assets/images/logo.png')},
      { key: '2', title: 'Track Your Energy Usage', image: require('../assets/images/slide2.png')},
      { key: '3', title: 'Get Daily Energy Saving Tips', image: require('../assets/images/slide3.jpg') },
    ];

    const handleNext = () => {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        navigation.replace('Login');
      }
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.slide}>
          <Image source={slides[currentIndex].image} style={styles.image} />
          <Text style={styles.title}>{slides[currentIndex].title}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent title="Next" onPress={handleNext} />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    slide: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1, // Takes the available space
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      color: '#4CAF50',
      textAlign: 'center',
      paddingHorizontal: 20,
    },
    buttonContainer: {
      marginBottom: 80, // Adjust this value to position the button lower
    },
  });
  
  export default OnboardingScreen;