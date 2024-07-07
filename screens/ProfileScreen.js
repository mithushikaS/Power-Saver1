import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import ButtonComponent from "../components/ButtonComponent";

const ProfileScreen = ({ navigation }) => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [energySavingGoals, setEnergySavingGoals] = useState('Reduce energy consumption by 20% in 6 months');
  const [achievementProgress, setAchievementProgress] = useState(40); // Example: 40% progress
  const [energyUsageData, setEnergyUsageData] = useState({
    weekly: [39.2, 41.5, 40.9, 42.3, 41.8],
    monthly: [165.3, 172.1, 169.8, 174.5],
    comparisonData: [160.2, 165.8, 162.5, 170.2],
  });

  const handleChooseProfilePicture = () => {
    // Implement logic to choose/upload profile picture
    // For simplicity, I'll set a placeholder image if no picture is chosen
    setProfilePicture(require("../assets/images/profile.png")); // Placeholder image path
  };

  const handleSaveChanges = () => {
    Alert.alert("Profile Updated", "Your profile information has been updated.");
    // Implement logic to update profile information
  };

  const handleLogout = () => {
    Alert.alert("Logged Out", "You have been logged out.");
    // Implement actual logout logic
    navigation.navigate('Login'); // Navigate to the Login screen
  };

  return (
    <View style={styles.container}>
      <HeaderComponent title="Profile" />
      
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity onPress={handleChooseProfilePicture} style={styles.profilePictureContainer}>
          <Image
            source={profilePicture ? { uri: profilePicture } : require("../assets/images/profile.png")}
            style={styles.profilePicture}
          />
        </TouchableOpacity>

        {/* Energy Saving Goals and Achievement Progress */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Energy Saving Goals</Text>
          <Text style={styles.text}>{energySavingGoals}</Text>
          <Text style={styles.sectionTitle}>Achievement Progress</Text>
          <Text style={styles.text}>{achievementProgress}%</Text>
        </View>

        {/* Usage Statistics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Usage Statistics</Text>
          <Text style={styles.subTitle}>Weekly Energy Consumption</Text>
          {energyUsageData.weekly.map((value, index) => (
            <Text key={index} style={styles.text}>Week {index + 1}: {value} kWh</Text>
          ))}
        </View>

        <ButtonComponent title="Save Changes" onPress={handleSaveChanges} />
        <ButtonComponent title="Log Out" onPress={handleLogout} color="#A020F0" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    padding: 20,
    alignItems: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profilePictureContainer: {
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  input: {
    marginBottom: 10,
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00796b',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#004d40',
  },
  text: {
    fontSize: 16,
    color: '#004d40',
    marginBottom: 5,
  },
});

export default ProfileScreen;
