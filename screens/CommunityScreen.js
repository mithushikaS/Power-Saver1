import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import HeaderComponent from "../components/HeaderComponent";

// Import your local image asset
const communityImage = require('../assets/images/community.png');

const CommunityScreen = ({ navigation }) => {
  const handleSocialMediaPress = (platform) => {
    console.log(`Navigating to ${platform}`);
    navigation.navigate('FeedbackScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <HeaderComponent title="Community" />
        
        {/* Display the community image */}
        <Image
          source={communityImage}
          style={styles.communityImage}
          resizeMode="cover"
        />
        
        <Text style={styles.content}>
          Join our vibrant community and share your best tips and experiences with others. Stay connected and updated with our latest news and activities. Follow us on social media to be part of the conversation!
        </Text>
        
        <Text style={styles.sectionTitle}>Follow Us</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => handleSocialMediaPress('Instagram')}>
            <Image
              style={styles.socialIcon}
              source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/instagram-new.png' }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocialMediaPress('Facebook')}>
            <Image
              style={styles.socialIcon}
              source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/facebook.png' }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocialMediaPress('Threads')}>
            <Image
              style={styles.socialIcon}
              source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/topic.png' }} // Using a generic thread icon
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.extraContent}>
          <Text style={styles.extraText}>
            Have some feedback? We would love to hear from you! Your suggestions and thoughts help us improve.
          </Text>
          <TouchableOpacity 
            style={styles.feedbackButton}
            onPress={() => navigation.navigate('Feedback')}
          >
            <Text style={styles.feedbackButtonText}>Give Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  communityImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    marginTop: 20,
  },
  content: {
    fontSize: 18,
    color: '#555',
    marginVertical: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    marginVertical: 10,
    color: '#333',
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
  extraContent: {
    marginTop: 30,
    alignItems: 'center',
  },
  extraText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  feedbackButton: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  feedbackButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CommunityScreen;
