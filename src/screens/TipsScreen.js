import React, {useState} from "react";
import { View,Text,FlatList,StyleSheet } from "react-native";
import EnergyTipCard from "../components/EnergyTipCard";

const TipsScreen = () => {
    const [tips] = useState([
      { id: '1', tip: 'Turn off lights when not in use.' },
      { id: '2', tip: 'Unplug devices when not in use.' },
      { id: '3', tip: 'Use energy-efficient bulbs.' }
    ]);
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Energy-Saving Tips</Text>
        <FlatList
          data={tips}
          renderItem={({ item }) => <EnergyTipCard tip={item.tip} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff'
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 8
    }
  });
  
  export default TipsScreen;