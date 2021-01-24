import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList ,TextInput} from 'react-native';
import { styles } from "../styles/styles";
import Axios from 'axios'
import axios from 'axios';


export default function HomeScreen({ navigation }) {

  const [state, setState] = useState();
  const [name, setname] = useState('');
  const [quantity, setquantity] = useState('');
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
  function apidelete(uid){
    axios.delete("https://app-api-geny.herokuapp.com/products/delete",
    {data: {uuid: uid}})
    .then(res1 => {
     console.log(res1.data);
     console.log({uid});
    })
  }
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
        keyExtractor={item=>item.uuid}
        data={state}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.plus}
                onPress={() => navigation.push('Details', { name: item.name, quantity: item.quantity })}>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity
        style={styles.button}
        onPress={() =>apidelete(item.uuid)}
      >
        <Text style={styles.buttontext}>Delete</Text>
      </TouchableOpacity>

          </View>
        )}
      
      />
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
  )
}