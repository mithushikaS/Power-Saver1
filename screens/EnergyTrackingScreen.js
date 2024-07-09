import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressCircle from '../components/ProgressCircle'; // Adjust this path as needed

const EnergyTrackingScreen = () => {
  const [timeFrame, setTimeFrame] = useState('Monthly');
  const navigation = useNavigation();

  const getUnitsAndProgress = (frame) => {
    switch (frame) {
      case 'Daily':
        return { units: 30, progress: 30 / 100 };
      case 'Monthly':
        return { units: 250, progress: 250 / 1000 };
      case 'Yearly':
        return { units: 3000, progress: 3000 / 12000 };
      default:
        return { units: 0, progress: 0 };
    }
  };

  const { units, progress } = getUnitsAndProgress(timeFrame);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.tabContainer}>
          <Button
            title="Daily"
            onPress={() => setTimeFrame('Daily')}
            color={timeFrame === 'Daily' ? '#ffd700' : '#f0f0f0'}
          />
          <Button
            title="Monthly"
            onPress={() => setTimeFrame('Monthly')}
            color={timeFrame === 'Monthly' ? '#ffd700' : '#f0f0f0'}
          />
          <Button
            title="Yearly"
            onPress={() => setTimeFrame('Yearly')}
            color={timeFrame === 'Yearly' ? '#ffd700' : '#f0f0f0'}
          />
        </View>
        <ProgressCircle units={units} progress={progress} />
        <Image
          source={require('../assets/images/energy.png')} // Adjust this path as needed
          style={styles.headerImage}
          resizeMode="contain"
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            The progress circle shows the average energy units consumed for the selected time frame. Adjust the time frame to see how your energy consumption changes daily, monthly, or yearly.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.navigateButton}
          onPress={() => navigation.navigate('Renewable Energy Info')}
        >
          <Text style={styles.navigateButtonText}>Go to Renewable Energy Info</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingTop: 10, // Adjust the top padding as needed
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 0,
    marginTop: 0,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  descriptionContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  navigateButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffd700',
    borderRadius: 50,
    alignItems: 'center',
    marginbottom: 20,
  },
  navigateButtonText: {
    fontSize: 16,
    color: 'white',
    
    
  },
});

export default EnergyTrackingScreen;
