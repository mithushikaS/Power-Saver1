// App.js
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import RenewableEnergyInfoScreen from './screens/RenewableEnergyInfoScreen';
import CommunityScreen from './screens/CommunityScreen';
import SettingsScreen from './screens/SettingsScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import HomeScreen from './screens/HomeScreen';
import EnergyTrackingScreen from './screens/EnergyTrackingScreen';
import DailyTipsScreen from './screens/DailyTipsScreen';
import AlertsScreen from './screens/AlertsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';

import { Ionicons } from '@expo/vector-icons';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />) }} />
    <Tab.Screen name="Energy Tracking" component={EnergyTrackingScreen} options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="flash" color={color} size={size} />) }} />
    <Tab.Screen name="Daily Tips" component={DailyTipsScreen} options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="bulb" color={color} size={size} />) }} />
    <Tab.Screen name="Alerts" component={AlertsScreen} options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="alert" color={color} size={size} />) }} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="person" color={color} size={size} />) }} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Renewable Energy Info" component={RenewableEnergyInfoScreen} />
      <Stack.Screen name="Community" component={CommunityScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
