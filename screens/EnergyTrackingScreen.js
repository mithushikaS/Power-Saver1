import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Mock data for energy usage
const mockData = [
    { date: '2024-07-01', usage: '5 kWh', peakUsage: '2 PM', cost: '$1.50' },
    { date: '2024-07-02', usage: '4.5 kWh', peakUsage: '3 PM', cost: '$1.35' },
    { date: '2024-07-03', usage: '5.2 kWh', peakUsage: '1 PM', cost: '$1.56' },
    { date: '2024-07-04', usage: '5.8 kWh', peakUsage: '12 PM', cost: '$1.74' },
    // Add more mock data entries here
];

const EnergyTrackingScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Energy Usage Tracking</Text>
            
            {/* Placeholder for Interactive Chart */}
            <View style={styles.chartContainer}>
                <Text style={styles.chartText}>Interactive Chart Placeholder</Text>
            </View>

            {/* Daily Usage Details */}
            <Text style={styles.subheader}>Daily Usage Details</Text>
            {mockData.map((entry, index) => (
                <View key={index} style={styles.entry}>
                    <View style={styles.entryRow}>
                        <Text style={styles.date}>{entry.date}</Text>
                        <Text style={styles.usage}>{entry.usage}</Text>
                    </View>
                    <View style={styles.entryRow}>
                        <Text style={styles.peakUsage}>Peak Usage: {entry.peakUsage}</Text>
                        <Text style={styles.cost}>Cost: {entry.cost}</Text>
                    </View>
                </View>
            ))}

            {/* Usage Trends */}
            <Text style={styles.subheader}>Usage Trends</Text>
            <View style={styles.trendsContainer}>
                <Text style={styles.trendsText}>Trends Graph Placeholder</Text>
            </View>

            {/* Comparison with Past Data */}
            <Text style={styles.subheader}>Comparison with Past Data</Text>
            <View style={styles.comparisonContainer}>
                <Text style={styles.comparisonText}>Comparison Graph Placeholder</Text>
            </View>

            {/* IoT Integration Placeholder */}
            <Text style={styles.subheader}>IoT Integration</Text>
            <View style={styles.iotContainer}>
                <Text style={styles.iotText}>Real-Time Data Placeholder</Text>
            </View>
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
    chartContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    chartText: {
        fontSize: 18,
        color: '#6c757d',
    },
    subheader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#495057',
    },
    entry: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#dee2e6',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        padding: 15,
    },
    entryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    date: {
        fontSize: 16,
        color: '#212529',
    },
    usage: {
        fontSize: 16,
        color: '#212529',
    },
    peakUsage: {
        fontSize: 14,
        color: '#6c757d',
    },
    cost: {
        fontSize: 14,
        color: '#6c757d',
    },
    trendsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    trendsText: {
        fontSize: 18,
        color: '#6c757d',
    },
    comparisonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    comparisonText: {
        fontSize: 18,
        color: '#6c757d',
    },
    iotContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    iotText: {
        fontSize: 18,
        color: '#6c757d',
    },
});

export default EnergyTrackingScreen;