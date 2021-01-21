import React,{useState} from 'react';
import { Button, View, Text, TextInput, useWindowDimensions, TouchableOpacity,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 export const styles = StyleSheet.create({
    button:{
     height:50,
     borderRadius:50,
     backgroundColor: '#33FF33',
     paddingVertical:20,
     paddingHorizontal:20,
     justifyContent:'center'},
     buttontext:{
       textAlign:'center',
       color:'#006400',
       fontSize:20
           
     }
   })