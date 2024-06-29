import React from "react";
import { View,Text,StyleSheet } from "react-native";

const EnergyTipCard = ({ tip }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.tip}>{tip}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#f9f9f9',
      padding: 16,
      borderRadius: 8,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 1
    },
    tip: {
      fontSize: 16,
      color: '#333'
    }
  });
  
  export default EnergyTipCard;