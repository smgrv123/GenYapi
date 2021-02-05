import React, { useState, useEffect } from 'react';
import { ConstraintLayout, ConstraintGuide } from "react-constraint-layout";
import { View, Text, TouchableOpacity, FlatList, TextInput, Image, ActivityIndicator, ScrollView, Alert } from 'react-native';
import { styles } from "../styles/styles";
import Axios from 'axios'
import axios from 'axios';

export default function HomeScreen({ navigation }) {

  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);
  function deleteconfirmation(uid) {
    Alert.alert(
      "Confirm",
      "Are u sure u want to delete this item?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => apidelete(uid) }
      ],
      { cancelable: false }
    );
  }
  function apidelete(uid) {
    axios.delete("https://app-api-geny.herokuapp.com/products/delete",
      { data: { uuid: uid } })
      .then(res1 => {
        console.log(res1.data);
        console.log({ uid });
        navigation.replace("Home")
      })
  }

  useEffect(() => {
    Axios.get('https://app-api-geny.herokuapp.com/products/all/1')
      .then(res => {
        setState(res.data);
        setLoading(false)
      })
  }, [])
  if (loading) {
    return (
      <View>
        <Image
        source={require("../images/loading_picture.png")}
        style={{margin:80,
          marginRight:50,
          marginTop:150,
          marginLeft:60,
        height:350,
        width:300}}/>
      
      </View>
    )
  }
  return (


    <View>
     
      <FlatList
        keyExtractor={item => item.uuid}
        data={state}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.plus}
                onPress={() => navigation.navigate('Details',
                  {
                    name: item.name,
                    quantity: item.quantity,
                    uid: item.uuid
                  }
                )}>
                {item.name}
              </Text>
              <TouchableOpacity style={styles.delbtn}
              onPress={() => deleteconfirmation(item.uuid)}
            >
              <Image
                source={require("../images/del_image.png")}
                style={{
                  resizeMode: 'center',
                  width: 80,
                  height: 70,
                }} />
            </TouchableOpacity>
            </TouchableOpacity>
            
          </View>
        )}
      />
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
    </View>

  )
}