import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({ title, onPress, color = '#4CAF50' }) => {
    return (
      <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      padding: 15,
      borderRadius: 45,
      alignItems: 'center',
      marginVertical: 30,
      paddingLeft:120,
      paddingRight:120,
      width: '100%',
    },
    text: {
      color: '#fff',
      fontSize: 16,
    },
  });
  
  export default ButtonComponent;