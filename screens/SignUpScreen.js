import React, {useState} from "react";
import { View, StyleSheet,Text, TextInput, Button,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSignUp = () => {
      navigation.replace('HomeTabs');
    };
  
    return (
      <View style={styles.container}>
      <Image source={require('../assets/images/Login-amico (1).png')} style={styles.image} />
      <Text style={styles.title}>Register</Text>
        <InputComponent
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <InputComponent
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <InputComponent
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <ButtonComponent title="Sign Up" onPress={handleSignUp} />
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
        Already have an account? Sign In
      </Text>
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
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    color:'green',
  },
  link: {
    color: 'green',
    marginTop: 20,
    textAlign: 'center',
  },
  });
  
  export default SignUpScreen;