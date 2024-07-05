import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
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
  
  export default SignUpScreen;