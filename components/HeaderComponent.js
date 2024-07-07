import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HeaderComponent = ({ title }) => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    header: {
      width: '100%',
      padding: 15,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 20,
    },
  });
  
  export default HeaderComponent;