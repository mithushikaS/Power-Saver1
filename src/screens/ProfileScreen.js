import React from "react";
import { View,Text,Button,StyleSheet,Image } from "react-native";

const ProfileScreen = ({ navigation }) => {
    const handleLogout = () => {
      // Handle logout logic here
      navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.header}>Profile</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  }
});

export default ProfileScreen;