import React from 'react';
import { View, Text, TouchableOpacity, FlatList ,TextInput , Alert} from 'react-native';
import { ConfirmProvider, useConfirm } from 'react-native-confirm-dialog'
import { styles } from "../styles/styles"
import Axios from 'axios'
import axios from 'axios';

export default function DetailsScreen({ route }) {
  function deleteconfirmation(uid){
    Alert.alert(
      "Confirm",
      "Are u sure u want to delete this item?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () =>apidelete(uid) }
      ],
      { cancelable: false }
    );
  }
  
  function apidelete(uid){
    axios.delete("https://app-api-geny.herokuapp.com/products/delete",
    {data: {uuid: uid}})
    .then(res1 => {
     console.log(res1.data);
     console.log({uid});
    })
  }
  const { name, quantity ,uid} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#12B2F3', padding: 20 }}>
      <Text style={styles.textst}>Name: {JSON.stringify(name)}</Text>
      <Text style={styles.textst}>Quantity: {JSON.stringify(quantity)}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>  deleteconfirmation(uid)
        }
      >
        <Text style={styles.buttontext}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}