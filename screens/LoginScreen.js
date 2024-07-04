import React, {useState} from "react";
import { View,StyleSheet } from "react-native";
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
  
    const handleSignUp = () => {
      navigation.navigate('SignUp');
    };
  
    return (
      <View style={styles.container}>
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
        <ButtonComponent title="Sign Up" onPress={handleSignUp} color="#FF9800" />
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
  });
  
  export default LoginScreen;