import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderComponent from "../components/HeaderComponent";

const RenewableEnergyInfoScreen = () => {
    return (
      <View style={styles.container}>
        <HeaderComponent title="Renewable Energy Info" />
        <Text style={styles.content}>Information about renewable energy sources.</Text>
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
  
  export default RenewableEnergyInfoScreen;