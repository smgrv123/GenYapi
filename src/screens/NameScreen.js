import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet, Alert } from 'react-native';
import { styles } from "../styles/styles";
import axios from 'axios';

export default function NameScreen({ navigation }) {

  const [name, setname] = useState('');
  const [quantity, setquantity] = useState('');

  function postapi(itemname, itemquantity) {
    if (itemname == "" || itemquantity == "") {
      Alert.alert(
        "Empty Fields",
        "Enter values",
        [
          {
            text: "Ok"
          }
        ]
      )
    }
    axios({
      method: 'post',
      url: 'https://app-api-geny.herokuapp.com/products/add',
      data: {
        name: itemname,
        quantity: itemquantity,
        group: '1'
      }
    });
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
      }}>

      <TextInput
        style={style.textinput}
        placeholder="Enter item name"
        onChangeText={text => setname(text)}
        value={name}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
      />

      <TextInput
        style={style.textinput}
        placeholder="Enter item quantity"
        onChangeText={text => setquantity(text)}
        value={quantity}
        returnKeyType="go"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => postapi(name, quantity)}
      >
        <Text style={styles.buttontext}>Add item</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  textinput:
  {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    fontSize: 25,
    margin: 20,
  },
})