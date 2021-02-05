import React from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import { ConfirmProvider, useConfirm } from 'react-native-confirm-dialog'
import { styles } from "../styles/styles"
import axios from 'axios';

export default DetailsScreen = ({ route, navigation }) => {

 

 

  const { name, quantity, uid } = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
      }}>
      <Text
        style={{ fontSize:50,
          justifyContent: 'center'
}}>
        Name: {(name)}
      </Text>
      <Text
        style={{ fontSize:50,
          justifyContent: 'center'}}>
        Quantity: {JSON.stringify(quantity)}
      </Text>
     
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("UpdateScreen", {
            uuid: uid
          })
        }}
      >
        <Text
          style={styles.buttontext}
        >
          Update
        </Text>
      </TouchableOpacity>
    </View>
  );
}