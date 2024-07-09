import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importing the local image
import profilePic from '../assets/images/profile.png'; // Adjust the path as necessary

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
  const navigation = useNavigation();
  const data = [30, 45, 28, 80, 99, 43, 50, 60, 90];
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  const maxValue = Math.max(...data);

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Image
            source={profilePic}
            style={styles.profilePicture}
          />
        </View>
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
        <Text style={styles.explanationHeader}>Explanation of the Graph</Text>
        <Text style={styles.explanationText}>
          The bar chart above illustrates the usage history over the past months. Each bar represents the amount of usage recorded for that particular month, with the values scaled accordingly. This visual representation helps in understanding the trends and patterns in usage over time.
        </Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  profilePicture: {
    width: 200,
    height: 200
  ,
    borderRadius: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  chartContainer: {
    flexDirection: 'row',
    marginBottom: 20,
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
    width: 16,
    backgroundColor: '#b694ff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
  },
  barLabel: {
    color: '#fff',
    marginBottom: 4,
  },
  explanationHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  explanationText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  logoutButton: {
    backgroundColor: '#ff6b6b',
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
