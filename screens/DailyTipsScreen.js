import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

// Import local images
import tipImage1 from '../assets/images/tip1.jpg'; // Adjust the path and filename as per your actual image file
import tipImage2 from '../assets/images/tip2.jpg';
import tipImage3 from '../assets/images/tip3.jpg';
import tipImage4 from '../assets/images/tip4.jpg';

// Mock data for daily tips
const mockTips = [
    {
        date: '2024-07-01',
        tip: 'Turn off lights when not in use.',
        image: tipImage1,
    },
    {
        date: '2024-07-02',
        tip: 'Use energy-efficient bulbs.',
        image: tipImage2,
    },
    {
        date: '2024-07-03',
        tip: 'Unplug devices when fully charged.',
        image: tipImage3,
    },
    {
        date: '2024-07-04',
        tip: 'Use natural light during the day.',
        image: tipImage4,
    },
    // Add more mock tips here
];

const DailyTipsScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Daily Energy Saving Tips</Text>
            {mockTips.map((tip, index) => (
                <View key={index} style={styles.tipContainer}>
                    <Image source={tip.image} style={styles.tipImage} />
                    <View style={styles.tipTextContainer}>
                        <Text style={styles.tipDate}>{tip.date}</Text>
                        <Text style={styles.tipText}>{tip.tip}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    header: {
        fontSize: 26,
        marginBottom: 20,
        textAlign: 'center',
        color: '#343a40',
        fontWeight: 'bold',
    },
    tipContainer: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        marginBottom: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        alignItems: 'center',
    },
    tipImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 15,
    },
    tipTextContainer: {
        flex: 1,
    },
    tipDate: {
        fontSize: 14,
        color: '#6c757d',
        marginBottom: 5,
    },
    tipText: {
        fontSize: 16,
        color: '#212529',
    },
});

export default DailyTipsScreen;