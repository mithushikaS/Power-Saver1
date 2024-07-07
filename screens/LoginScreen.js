import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      navigation.replace('HomeTabs');
    };
  
    return (
      <View style={styles.container}>
      <Image source={require('../assets/images/login_image.png')} style={styles.image} />
      <Text style={styles.title}>Login</Text>
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
        <ButtonComponent title="Login" onPress={handleLogin} />
        <Text style={styles.link1} onPress={() => navigation.navigate('ForgotPassword')}>
        Forgot Password?
      </Text>
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
        Don't have an account? Sign Up
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
  link: {
    color: 'green',
    marginTop: 30,
    textAlign: 'center',
  },
  link1: {
    color: 'gray',
    marginTop: 10,
    textAlign: 'center',
  },
  });
  
  export default LoginScreen;