import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
  
    const handleSendCode = () => {
      // Handle sending the code to the email
      navigation.navigate('NewPassword');
    };
  
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/forgotpassword.png')} style={styles.image} />
        <Text style={styles.title}>Forgot Password</Text>
        <InputComponent
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
        />
        <ButtonComponent title="Send a Code" onPress={handleSendCode} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    image: {
      width: 250,
      height: 250,
      alignSelf: 'center',
      marginBottom: 20,
      marginTop: 10,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
      color: 'green',
    },
  });
  
  export default ForgotPasswordScreen;