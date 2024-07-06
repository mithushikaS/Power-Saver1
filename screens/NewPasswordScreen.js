import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";

const NewPasswordScreen = () => {
    const navigation = useNavigation();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleResetPassword = () => {
      // Handle resetting the password
      navigation.navigate('Login');
    };
  
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/newpassword.png')} style={styles.image} />
        <Text style={styles.title}>Reset Password</Text>
        <InputComponent
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <InputComponent
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <ButtonComponent title="Reset Password" onPress={handleResetPassword} />
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
      height: 300,
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
  
  export default NewPasswordScreen;