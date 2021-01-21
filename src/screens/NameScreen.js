import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function NameScreen({ navigation }) {

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#12B2F3',
        padding: 20
      }}>
      <TouchableOpacity
      onPress={()=>{
        navigation.goBack();
      }}
      >
        <Text>
          Go back
        </Text>
      </TouchableOpacity>
    </View>
  );
}
