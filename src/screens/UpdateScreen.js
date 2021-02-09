import React from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Axios from 'axios';
import {styles} from '../styles/styles';

export default UpdateScreen = ({route, navigation}) => {
  const [quant, setQuant] = useState();
  const {uuid} = route.params;
  const update = () => {
    Axios.patch('https://app-api-geny.herokuapp.com/products/update', {
      uuid: uuid,
      quantity: quant,
    })
      .then((res) => {
        console.log(res.data);
        navigation.replace('Home');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View>
      <TextInput
        style={style.textinput}
        keyboardType="decimal-pad"
        placeholder="Update Quantity"
        onChangeText={(val) => {
          setQuant(val);
        }}
      />
      <TouchableOpacity
        style={style.update}
        onPress={() => {
          update();
        }}>
        <Text style={styles.buttontext}>update quantity</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  textinput: {
    height: 50,
    width: '76%',
    borderColor: 'gray',
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    fontSize: 20,
    marginLeft: '12%',
    marginTop: '40%',
    justifyContent: 'center',
  },
  update: {
    paddingHorizontal: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    marginTop: '20%',
    marginBottom: 10,
    marginLeft: '22%',
    height: 50,
    width: '56%',
    backgroundColor: 'lightgrey',
  },
});
