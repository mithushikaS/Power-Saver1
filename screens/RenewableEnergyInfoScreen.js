import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import HeaderComponent from "../components/HeaderComponent";

// Assuming your images are imported as follows:
const solarPanelImage = require('../assets/images/solar-panel.png');
const benefitsImage = require('../assets/images/benefits.jpg');
const windTurbineImage = require('../assets/images/wind-turbine.png');
const hydropowerImage = require('../assets/images/hydropower.png');
const geothermalImage = require('../assets/images/geothermal.png');
const biomassImage = require('../assets/images/biomass.png');

const RenewableEnergyInfoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent title="Renewable Energy Info" />

      <View style={styles.section}>
        <Text style={styles.title}>Introduction to Renewable Energy</Text>
        <Image source={solarPanelImage} style={styles.image} />
        <Text style={styles.content}>
          Renewable energy comes from sources that are naturally replenishing such as solar, wind, hydro, geothermal, and biomass. 
          {"\n\n"}Solar energy harnesses sunlight using photovoltaic cells. 
          {"\n\n"}Wind energy captures wind power with turbines. 
          {"\n\n"}Hydropower generates electricity from flowing water. 
          {"\n\n"}Geothermal energy utilizes heat from the earth. 
          {"\n\n"}Biomass energy comes from organic materials.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Benefits of Renewable Energy</Text>
        <Image source={benefitsImage} style={styles.image} />
        <Text style={styles.content}>
          Renewable energy reduces carbon footprint, promotes sustainability, and can lead to significant cost savings over time.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Types of Renewable Energy</Text>
        <Image source={windTurbineImage} style={styles.image} />
        <Text style={styles.content}>
          Wind energy captures wind power with turbines.
        </Text>
        <Image source={hydropowerImage} style={styles.image} />
        <Text style={styles.content}>
          Hydropower generates electricity from flowing water.
        </Text>
        <Image source={geothermalImage} style={styles.image} />
        <Text style={styles.content}>
          Geothermal energy utilizes heat from the earth.
        </Text>
        <Image source={biomassImage} style={styles.image} />
        <Text style={styles.content}>
          Biomass energy comes from organic materials.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  section: {
    margin: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  content: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
});

export default RenewableEnergyInfoScreen;
