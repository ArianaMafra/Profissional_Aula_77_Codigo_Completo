import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocatorScreen from './screens/IssLocator';
import MeteoroScreen from './screens/Meteoros';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IssLocation" component={IssLocatorScreen} />
        <Stack.Screen name="Meteors" component={MeteoroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


