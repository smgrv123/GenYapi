import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "../styles/styles";


export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    </View>
  );

}