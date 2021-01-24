import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Axios from 'axios'
import { styles } from '../styles/styles'

export default UpdateScreen = ({ route, navigation }) => {
    const [quant, setQuant] = useState()
    const { uuid } = route.params;
    const update = () => {
        Axios.patch("https://app-api-geny.herokuapp.com/products/update", {
            "uuid": uuid,
            "quantity": quant
        }).then(res => {
            console.log(res.data)
            navigation.replace("Home")
        }
        ).catch(err => {
            console.log(err)
        })
    }
    return (
        <View>
            <TextInput
                style={style.textinput}
                placeholder="update quantity"
                onChangeText={(val) => {
                    setQuant(val)
                }}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    update()
                }}
            >
                <Text
                    style={styles.buttontext}
                >
                    update quantity
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    textinput:
    {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        fontSize: 25,
        margin: 20,
        marginTop: 50
    },
})