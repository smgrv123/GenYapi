import React,{useState} from 'react';
import { Button, View, Text, TextInput, useWindowDimensions, TouchableOpacity,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import  {styles} from "../styles/styles"

export default function DetailsScreen({ navigation }) {
    const [fullname, setfullname] = React.useState('');
    const windowWidth= useWindowDimensions().width;
    return (
      <View style={{  flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#12B2F3', padding:20}}>
         
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Name')}
        >
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttontext}>go back</Text>
        </TouchableOpacity>
      
       
       
      </View>
    );
  }