import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderComponent from "../components/HeaderComponent";

const CommunityScreen = () => {
    return (
      <View style={styles.container}>
        <HeaderComponent title="Community" />
        <Text style={styles.content}>Join the community and share your tips.</Text>
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
  
  export default CommunityScreen;