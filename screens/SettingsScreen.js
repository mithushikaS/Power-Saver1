import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderComponent from "../components/HeaderComponent";

const SettingsScreen = () => {
    return (
      <View style={styles.container}>
        <HeaderComponent title="Settings" />
        <Text style={styles.content}>Adjust your app settings here.</Text>
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
  
  export default SettingsScreen;