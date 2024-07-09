import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../components/HeaderComponent';
import ButtonComponent from '../components/ButtonComponent';

const HomeScreen = () => {
  const navigation = useNavigation();

  const data = {
    bill: 10163,
    units: 570,
    dueDate: "09 Oct 2019",
    energyUtilization: [
      { range: "201 to 300 Units", pricePerUnit: "Rs. 10.2", unitsUsed: "300.0 Used" },
      { range: "301 to 700 Units", pricePerUnit: "Rs. 17.6", unitsUsed: "270.0 Used" },
    ],
  };

  return (
    <View style={styles.container}>
      <HeaderComponent title="Power Saver" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.subTitle}>Single Phase Residential</Text>

        <View style={styles.billContainer}>
          <View style={styles.billBox}>
            <Text style={styles.billText}>BILL</Text>
            <Text style={styles.billAmount}>Rs {data.bill}</Text>
          </View>
          <View style={styles.unitBox}>
            <Text style={styles.billText}>UNITS</Text>
            <Text style={styles.unitAmount}>{data.units}</Text>
          </View>
        </View>

        <View style={styles.dueDateContainer}>
          <Text style={styles.dueDateText}>Due Date</Text>
          <Text style={styles.dueDate}>{data.dueDate}</Text>
        </View>

        <Text style={styles.energyTitle}>Energy Utilization</Text>

        <View style={styles.utilizationContainer}>
          {data.energyUtilization.map((util, index) => (
            <View key={index} style={styles.utilizationBox}>
              <Text style={styles.utilizationText}>{util.range}</Text>
              <Text style={styles.utilizationPrice}>{util.pricePerUnit} / Unit</Text>
              <Text style={styles.utilizationUsed}>{util.unitsUsed}</Text>
            </View>
          ))}
        </View>

        <View style={styles.navigationContainer}>
          <ButtonComponent
            title="Community"
            onPress={() => navigation.navigate('Community')}
            color="#000000"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 18,
    marginTop: 8,
  },
  billContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  billBox: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAD02E',
    margin: 8,
    alignItems: 'center',
  },
  unitBox: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAD02E',
    margin: 8,
    alignItems: 'center',
  },
  billText: {
    fontSize: 18,
  },
  billAmount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  unitAmount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dueDateContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  dueDateText: {
    fontSize: 18,
    color: '#616161',
  },
  dueDate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#37474F',
  },
  utilizationContainer: {
    width: '100%',
    marginTop: 20,
  },
  utilizationBox: {
    padding: 10,
    backgroundColor: '#FFF',
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 5,
  },
  utilizationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#37474F',
  },
  utilizationPrice: {
    fontSize: 16,
    color: '#616161',
  },
  utilizationUsed: {
    fontSize: 16,
    color: '#616161',
  },
  navigationContainer: {
    width: '100%',
    marginTop: 20,
  },
});

export default HomeScreen;