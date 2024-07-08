import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

const EnergyTrackingScreen = () => {
  const [timeFrame, setTimeFrame] = useState('Monthly');

  const getUnitsAndProgress = (frame) => {
    switch (frame) {
      case 'Daily':
        return { units: 30, progress: 30 / 100, color: 'red' };
      case 'Monthly':
        return { units: 250, progress: 250 / 1000, color: 'gold' };
      case 'Yearly':
        return { units: 3000, progress: 3000 / 12000, color: 'green' };
      default:
        return { units: 0, progress: 0, color: 'gray' };
    }
  };

  const { units, progress, color } = getUnitsAndProgress(timeFrame);
  const rotation = progress * 360;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <Button
          mode="contained"
          style={timeFrame === 'Daily' ? styles.tabButtonSelected : styles.tabButton}
          onPress={() => setTimeFrame('Daily')}
        >
          Daily
        </Button>
        <Button
          mode="contained"
          style={timeFrame === 'Monthly' ? styles.tabButtonSelected : styles.tabButton}
          onPress={() => setTimeFrame('Monthly')}
        >
          Monthly
        </Button>
        <Button
          mode="contained"
          style={timeFrame === 'Yearly' ? styles.tabButtonSelected : styles.tabButton}
          onPress={() => setTimeFrame('Yearly')}
        >
          Yearly
        </Button>
      </View>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <View style={styles.baseCircle} />
          <View style={[styles.progressCircle, {
            transform: [{ rotate: `${rotation}deg` }],
            borderColor: color,
          }]} />
          {progress > 0.5 && (
            <View style={[styles.progressCircleOverflow, {
              borderColor: color,
            }]} />
          )}
          <Text style={styles.circleText}>{units}</Text>
          <Text style={styles.circleSubText}>Average Units</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  tabButtonSelected: {
    flex: 1,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#ffd700',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  baseCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 20,
    borderColor: '#e6e6e6',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  progressCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 20,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  progressCircleOverflow: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 20,
    borderRightColor: '#000000',
    borderTopColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  circleText: {
    fontSize: 48,
    color: 'gold',
    fontWeight: 'bold',
    position: 'absolute',
    top: '25%',
    textAlign: 'center',
    width: '100%',
  },
  circleSubText: {
    fontSize: 18,
    color: 'gray',
    position: 'absolute',
    top: '60%',
    textAlign: 'center',
    width: '100%',
  },
});

export default EnergyTrackingScreen;