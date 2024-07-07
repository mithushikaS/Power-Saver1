import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const AlertScreen = () => {
  const alerts = [
    {
      id: 1,
      image: require('../assets/images/alert1.png'),
      title: 'High Consumption Alert',
      description: 'Your electricity usage is higher than usual today.',
    },
    {
      id: 2,
      image: require('../assets/images/alert2.png'),
      title: 'Energy Saving Tip',
      description: 'Turn off unnecessary lights to save power.',
    },
    {
      id: 3,
      image: require('../assets/images/alert3.png'),
      title: 'Peak Usage Alert',
      description: 'You are using electricity during peak hours.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.title}>Alerts</Text>
      </View>
      {alerts.map((alert) => (
        <View key={alert.id} style={styles.alertCard}>
          <Image source={alert.image} style={styles.alertImage} />
          <View style={styles.alertText}>
            <Text style={styles.alertTitle}>{alert.title}</Text>
            <Text style={styles.alertDescription}>{alert.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerSection: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  alertCard: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  alertImage: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  alertText: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  alertDescription: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default AlertScreen;