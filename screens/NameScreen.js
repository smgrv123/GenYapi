import React,{useState} from 'react';
import { Button, View, Text, TextInput, useWindowDimensions, TouchableOpacity,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
// 

export default function NameScreen({navigation}){
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#12B2F3', padding:20 }}>
              <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  