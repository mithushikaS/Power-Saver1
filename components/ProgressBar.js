import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress, color }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${progress * 100}%`, backgroundColor: color }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  progressBar: {
    height: '100%',
    borderRadius: 10,
  },
});

export default ProgressBar;
