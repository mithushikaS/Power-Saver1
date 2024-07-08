import React, {useEffect} from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
    const navigation = useNavigation();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.replace('Onboarding');
      }, 3000);
  
      return () => clearTimeout(timer);
    }, [navigation]);
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f0f0f0" />
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.tagline}>Track, Save, and Share Energy Solutions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  tagline: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default SplashScreen;