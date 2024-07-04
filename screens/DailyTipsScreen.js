import React from "react";
import { View , Text, StyleSheet} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import CardComponent from "../components/CardComponent";

const DailyTipsScreen = () => {
    const tips = [
      { title: 'Tip 1', content: 'Save energy by turning off lights when not in use.' },
      { title: 'Tip 2', content: 'Use energy-efficient appliances.' },
    ];
  
    return (
      <View style={styles.container}>
        <HeaderComponent title="Daily Tips" />
        {tips.map((tip, index) => (
          <CardComponent key={index} title={tip.title} content={tip.content} />
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
  
  export default DailyTipsScreen;