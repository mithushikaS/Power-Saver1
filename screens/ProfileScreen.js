import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderComponent from "../components/HeaderComponent";

const ProfileScreen = () => {
    return (
      <View style={styles.container}>
        <HeaderComponent title="Profile" />
        <Text style={styles.content}>Edit your profile information.</Text>
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
  
  export default ProfileScreen;