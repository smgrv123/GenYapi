import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Image, ActivityIndicator } from 'react-native';
import { styles } from "../styles/styles";
import Axios from 'axios'
import axios from 'axios';

export default function HomeScreen({ navigation }) {

  const [state, setState] = useState();
  const[loading,setLoading]=useState(true);

  useEffect(() => {
    Axios.get('https://app-api-geny.herokuapp.com/products/all/1')
      .then(res => {
        setState(res.data);
        setLoading(false)
      })
  }, [])
if(loading){
  return(
    <View>
      <ActivityIndicator
      animating={loading}
      size={70}
      color='dimgrey'
      style={{
        margin:"50%"
      }}
      />
    </View>
  )
}
  return (
    <View>
      <TouchableOpacity style={styles.btn}
        onPress={() => navigation.navigate('Name')}
      >
        <Image
          source={require("../images/floatingaction.png")}
          style={{
            resizeMode: 'center',
            width: 70,
            height: 70,
            borderRadius: 50
          }} />
      </TouchableOpacity>
      <FlatList
        keyExtractor={item => item.uuid}
        data={state}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.plus}
                onPress={() => navigation.push('Details',
                  {
                    name: item.name,
                    quantity: item.quantity,
                    uid: item.uuid
                  }
                )}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}