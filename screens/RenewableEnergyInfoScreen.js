import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import HeaderComponent from "../components/HeaderComponent";

// Sample icons from Icons8 (for demonstration)
const icons = {
  solar: { uri: 'https://img.icons8.com/ios-filled/50/000000/solar-panel.png' },
  wind: { uri: 'https://img.icons8.com/ios-filled/50/000000/wind-turbine.png' },
  hydro: { uri: 'https://img.icons8.com/ios-filled/50/000000/dam.png' }, // Changed icon for hydropower
  geothermal: { uri: 'https://img.icons8.com/ios-filled/50/000000/geothermal.png' },
  biomass: { uri: 'https://img.icons8.com/ios-filled/50/000000/biomass.png' },
  benefits: { uri: 'https://img.icons8.com/ios-filled/50/000000/eco.png' },
};

const RenewableEnergyInfoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent title="Renewable Energy Info" />

      <View style={styles.section}>
        <Text style={styles.title}>1. Introduction to Renewable Energy</Text>
        <Text style={styles.content}>
          Renewable energy comes from sources that are naturally replenished on a human timescale, such as sunlight, wind, rain, tides, waves, and geothermal heat.
        </Text>

        <Text style={styles.subtitle}>Importance and Benefits:</Text>
        <Text style={styles.content}>
          • Environmental: Reduces greenhouse gas emissions and air pollution.{"\n"}
          • Economic: Lowers energy costs over time and creates jobs in renewable energy sectors.{"\n"}
          • Social: Improves public health by reducing pollution-related illnesses and contributes to energy security.
        </Text>

        <Text style={styles.subtitle}>Common Types of Renewable Energy Sources:</Text>
        <View style={styles.iconTextContainer}>
          <Image source={icons.solar} style={styles.icon} />
          <Text style={styles.content}>Solar Energy: Captures sunlight and converts it into electricity using photovoltaic cells.</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Image source={icons.wind} style={styles.icon} />
          <Text style={styles.content}>Wind Energy: Uses wind turbines to convert wind power into electricity.</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Image source={icons.hydro} style={styles.icon} />
          <Text style={styles.content}>Hydropower: Generates electricity by using the flow of water through turbines.</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Image source={icons.geothermal} style={styles.icon} />
          <Text style={styles.content}>Geothermal Energy: Harnesses heat from within the Earth to generate electricity.</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Image source={icons.biomass} style={styles.icon} />
          <Text style={styles.content}>Biomass Energy: Uses organic materials (such as wood, agricultural residues) to produce energy.</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7ff',
  },
  section: {
    margin: 20,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  content: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RenewableEnergyInfoScreen;