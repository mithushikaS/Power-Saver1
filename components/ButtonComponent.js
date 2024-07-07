import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

<<<<<<< HEAD
const ButtonComponent = ({ title, onPress, color = '#000000' }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonComponent;
=======
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
>>>>>>> ffe989d2a68742f8d83e6e115a621543e6fb755c
