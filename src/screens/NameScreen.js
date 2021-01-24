import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList ,TextInput} from 'react-native';
import { styles } from "../styles/styles";
import Axios from 'axios'
import axios from 'axios';
export default function NameScreen({ navigation }) {
  const [name, setname] = useState('');
  const [quantity, setquantity] = useState('');
  const [state, setState] = useState();
  function postapi(itemname,itemquantity){
    axios({
      method: 'post',
      url: 'https://app-api-geny.herokuapp.com/products/add',
      data: {
      name:itemname,
        quantity: itemquantity,
        group:'1'
      }
    });
   

  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#12B2F3',
        padding: 20
      }}>
      <Text style={{fontSize:20, fontStyle:'italic'}}>Enter item name</Text>
        <TextInput
      style={{ height: 50, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white',borderRadius: 20, paddingLeft:20, fontSize:25,marginBottom:20,color:'#34495e'}}
      placeholder="Enter item name"
      onChangeText={text => setname(text)}
      value={name}
      autoCapitalize = "none"
     
        autoCorrect = {false}
        returnKeyType = "next"
    />
       <Text style={{fontSize:20, fontStyle:'italic'}}>Enter item quantity</Text>
      <TextInput
       style={{ height: 50, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white',borderRadius: 20, paddingLeft:20, fontSize:25,marginBottom:20,color:'#34495e'}}
       placeholder="Enter item quantity"
      onChangeText={text => setquantity(text)}
      value={quantity}
      
      returnKeyType = "go"
      autoCapitalize = "none"
      autoCorrect = {false}
      />
       <TouchableOpacity
        style={styles.button}
        onPress={() =>postapi(name,quantity)}
      >
        <Text style={styles.buttontext}>Add item</Text>
      </TouchableOpacity>
    
    </View>
  );
}
