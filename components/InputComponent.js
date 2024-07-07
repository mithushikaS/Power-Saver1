import React from "react";
import { TextInput, StyleSheet } from 'react-native';

const InputComponent = ({ placeholder, value, onChangeText, secureTextEntry = false }) => {
    return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      width: '100%',
      padding: 15,
      marginVertical: 10,
      backgroundColor: '#fff',
      borderRadius: 40,
      borderWidth: 1,
      borderColor: '#ddd',
    },
  });
  
  export default InputComponent;