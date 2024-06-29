import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';

const App = () => {
  const user = false; // Replace with authentication logic

  return user ? <AppNavigator /> : <AuthNavigator />;
};

export default App;
