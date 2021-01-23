import React from 'react';
import { View, Text, useWindowDimensions, } from 'react-native';

import { styles } from "../styles/styles"

export default function DetailsScreen({ route }) {
  const { name, quantity } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#12B2F3', padding: 20 }}>
      <Text style={styles.textst}>Name: {JSON.stringify(name)}</Text>
      <Text style={styles.textst}>Quantity: {JSON.stringify(quantity)}</Text>
    </View>
  );
}