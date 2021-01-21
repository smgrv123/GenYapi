import React,{useState} from 'react';
// import { Button, View, Text, TextInput, useWindowDimensions, TouchableOpacity,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import NameScreen from './screens/NameScreen'
import styles from './styles/styles'
 
   
   const Stack = createStackNavigator();
   
  App = () => {
     return (
       <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
           <Stack.Screen name="Home" component={HomeScreen} 
           options={{
             title:'Login',
             headerStyle:{backgroundColor:'#F7F704'},
             headerTintColor:'black',
             headerTintStyle:{
               fontWeight:'bold',
               fontSize:25
             }
           
             
           }}/>
           <Stack.Screen name="Details" component={DetailsScreen} 
            options={{
             title:'Home',
             headerStyle:{backgroundColor:'#F7F704'},
             headerTintColor:'black',
             headerTintStyle:{
               fontWeight:'bold',
               fontSize:25
             }
           
             
           }}/>
           <Stack.Screen name="Name" component={NameScreen} 
            options={{
             title:'Details',
             headerStyle:{backgroundColor:'#F7F704'},
             headerTintColor:'black',
             headerTintStyle:{
               fontWeight:'bold',
               fontSize:25
             }
           
             
           }}/>
         </Stack.Navigator>
       </NavigationContainer>
     );
   }
   export default App;
   
   