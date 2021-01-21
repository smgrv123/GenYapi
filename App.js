import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import NameScreen from './src/screens/NameScreen'

const Stack = createStackNavigator();

App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            title: 'Login',
            headerStyle: { backgroundColor: '#F7F704' },
            headerTintColor: 'black',
            headerTintStyle: {
              fontWeight: 'bold',
              fontSize: 25
            }
          }} />
        <Stack.Screen name="Details" component={DetailsScreen}
          options={{
            title: 'Home',
            headerStyle: { backgroundColor: '#F7F704' },
            headerTintColor: 'black',
            headerTintStyle: {
              fontWeight: 'bold',
              fontSize: 25
            }
          }} />
        <Stack.Screen name="Name" component={NameScreen}
          options={{
            title: 'Details',
            headerStyle: { backgroundColor: '#F7F704' },
            headerTintColor: 'black',
            headerTintStyle: {
              fontWeight: 'bold',
              fontSize: 25
            }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

