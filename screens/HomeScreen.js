import React from "react";
import { View, Text,StyleSheet } from "react-native";
import HeaderComponent from "../components/HeaderComponent";

const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <HeaderComponent title="Home" />
        <Text style={styles.content}>Welcome to the Home Screen!</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    content: {
      fontSize: 18,
      color: '#333',
      margin: 20,
    },
  });
  
  export default HomeScreen;