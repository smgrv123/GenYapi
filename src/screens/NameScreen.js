import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import {styles} from '../styles/styles';
import axios from 'axios';

export default function NameScreen({navigation}) {
  const [name, setname] = useState('');
  const [quantity, setquantity] = useState('');

  function postapi(itemname, itemquantity) {
    if (itemname == '' || itemquantity == '') {
      Alert.alert('Empty Fields', 'Enter values', [
        {
          text: 'Ok',
        },
      ]);
    }
    axios({
      method: 'post',
      url: 'https://app-api-geny.herokuapp.com/products/add',
      data: {
        name: itemname,
        quantity: itemquantity,
        group: '1',
      },
    })
      .then((res) => {
        console.log(res.data);
        navigation.replace('Home');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <TextInput
        style={style.textinput}
        placeholder="Enter item name"
        onChangeText={(text) => {
          setname(text);
        }}
        value={name}
        keyboardType="ascii-capable"
        returnKeyType="next"
      />
      <TextInput
        style={style.textinput}
        placeholder="Enter item quantity"
        onChangeText={(text) => setquantity(text)}
        value={quantity}
        returnKeyType="go"
        keyboardType="decimal-pad"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          postapi(name, quantity);
        }}>
        <Text style={styles.buttontext}>Add item</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  textinput: {
    height: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 20,
    margin: 20,
    marginLeft: '10%',
    marginRight: '10%',
  },
});
2