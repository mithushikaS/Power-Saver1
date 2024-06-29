import React, {useState} from 'react';
import { View,Text,StyleSheet,FlatList } from 'react-native';

import { Dimensions } from 'react-native';;
import EnergyTipCard from '../components/EnergyTipCard';

const HomeScreen = () => {
    const [energyData] = useState([
      { time: 'Jan', usage: 100 },
      { time: 'Feb', usage: 200 },
      { time: 'Mar', usage: 150 },
      { time: 'Apr', usage: 250 },
      { time: 'May', usage: 300 }
    ]);
  
    const [tips] = useState([
      { id: '1', tip: 'Turn off lights when not in use.' },
      { id: '2', tip: 'Unplug devices when not in use.' },
      { id: '3', tip: 'Use energy-efficient bulbs.' }
    ]);
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Real-Time Energy Usage</Text>
        <LineChart
          data={{
            labels: energyData.map(data => data.time),
            datasets: [{
              data: energyData.map(data => data.usage)
            }]
          }}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        <Text style={styles.header}>Daily Energy-Saving Tips</Text>
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
  
  export default HomeScreen;