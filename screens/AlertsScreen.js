import React from "react";
import { View,Text, StyleSheet } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import CardComponent from "../components/CardComponent";

const AlertsScreen = () => {
    const alerts = [
      { title: 'Alert 1', content: 'Power outage in your area.' },
      { title: 'Alert 2', content: 'Scheduled maintenance on the power grid.' },
    ];
  
    return (
      <View style={styles.container}>
        <HeaderComponent title="Alerts" />
        {alerts.map((alert, index) => (
          <CardComponent key={index} title={alert.title} content={alert.content} />
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      paddingHorizontal: 20,
    },
  });
  
  export default AlertsScreen;