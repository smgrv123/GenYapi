import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {styles} from '../styles/styles';

export default DetailsScreen = ({route, navigation}) => {
  const {name, quantity, uid} = route.params;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={style.text}>Name: {name}</Text>
      <Text style={style.text}>Quantity: {JSON.stringify(quantity)}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('UpdateScreen', {
            uuid: uid,
          });
        }}>
        <Text style={styles.buttontext}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    padding: 10,
  },
});
