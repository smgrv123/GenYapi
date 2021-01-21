import React from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import { styles } from "../styles/styles"

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#12B2F3', padding: 20 }}>

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