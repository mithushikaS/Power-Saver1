import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Bar = ({ value, label }) => (
  <View style={styles.barContainer}>
    <View style={[styles.bar, { height: value * 2 }]}>
      <Text style={styles.barLabel}>{value}</Text>
    </View>
    <Text>{label}</Text>
  </View>
);

const ProfileScreen = () => {
  const data = [30, 45, 28, 80, 99, 43, 50, 60, 90];
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  const maxValue = Math.max(...data);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Usage History</Text>
      <View style={styles.chartContainer}>
        <View style={styles.verticalLinesContainer}>
          {Array.from({ length: 5 }).map((_, index) => (
            <View key={index} style={styles.verticalLineContainer}>
              <Text style={styles.yAxisLabel}>{Math.round((maxValue / 4) * (4 - index))}</Text>
              <View style={styles.verticalLine} />
            </View>
          ))}
        </View>
        <View style={styles.barsContainer}>
          {data.map((value, index) => (
            <Bar key={index} value={value} label={labels[index]} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  chartContainer: {
    flexDirection: 'row',
  },
  verticalLinesContainer: {
    justifyContent: 'space-between',
    paddingRight: 5,
  },
  verticalLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalLine: {
    height: 1,
    flex: 1,
    backgroundColor: '#ccc',
    marginLeft: 5,
  },
  yAxisLabel: {
    fontSize: 12,
    color: '#333',
  },
  barsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flex: 1,
  },
  barContainer: {
    alignItems: 'center',
  },
  bar: {
    width: 20,
    backgroundColor: '#22caec',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  barLabel: {
    color: '#fff',
    marginBottom: 4,
  },
});

export default ProfileScreen;
