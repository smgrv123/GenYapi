import React,{useState} from 'react';
import { Button, View, Text, TextInput, useWindowDimensions, TouchableOpacity,StyleSheet } from 'react-native';
import {styles  } from "../styles/styles";


export default function HomeScreen({ navigation }) {
  console.log(styles)
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  padding:20}}>
      
      <TouchableOpacity
          style={styles.button}
          onPress={() =>navigation.navigate('Details')}
        >
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
      
        
      </View>
    );
  
  }