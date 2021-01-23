import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from "../styles/styles";
import Axios from 'axios'


export default function HomeScreen({ navigation }) {

  const [state, setState] = useState();
  useEffect(() => {
    Axios.get('https://app-api-geny.herokuapp.com/products/all/1')
      .then(res => {
        setState(res.data);
      })
  }, [])

  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
      <FlatList
        data={state}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.plus}
                onPress={() => navigation.push('Details', { name: item.name, quantity: item.quantity })}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item=>item.uuid}
      />
    </View>
  )
}