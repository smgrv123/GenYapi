import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import {styles} from '../styles/styles';
import Axios from 'axios';
import axios from 'axios';

export default function HomeScreen({navigation}) {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);
  function deleteconfirmation(uid) {
    Alert.alert(
      'Confirm',
      'Are u sure u want to delete this item?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Cancel Pressed');
            navigation.navigate('Home');
            refresh();
          },
          style: 'cancel',
        },
        {text: 'OK', onPress: () => apidelete(uid)},
      ],
      {cancelable: false},
    );
  }
  function apidelete(uid) {
    axios
      .delete('https://app-api-geny.herokuapp.com/products/delete', {
        data: {uuid: uid},
      })
      .then((res1) => {
        console.log(res1.data);
        console.log({uid});
        navigation.navigate('Home');
        refresh();
      });
  }

  const refresh = () => {
    Axios.get('https://app-api-geny.herokuapp.com/products/all/1').then(
      (res) => {
        setState(res.data);
        setLoading(false);
      },
    );
  };

  useEffect(() => {
    Axios.get('https://app-api-geny.herokuapp.com/products/all/1')
      .then((res) => {
        setState(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View
        style={{
          backgroundColor: '#1d1d1d',
          flex: 1,
        }}>
        <Image
          source={require('../images/loading.png')}
          style={{
            marginTop: '50%',
            marginLeft: '12%',
            height: 300,
            width: 300,
          }}
        />
      </View>
    );
  }
  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        keyExtractor={(item) => item.uuid}
        data={state}
        renderItem={({item}) => (
          <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
              <Text
                style={styles.plus}
                onPress={() =>
                  navigation.navigate('Details', {
                    name: item.name,
                    quantity: item.quantity,
                    uid: item.uuid,
                  })
                }>
                {item.name}
              </Text>
              <TouchableOpacity
                style={styles.delbtn}
                onPress={() => {
                  deleteconfirmation(item.uuid);
                  console.log('pressed');
                }}>
                <Image
                  source={require('../images/del_image.png')}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          console.log('pressed');
          navigation.navigate('Name');
        }}>
        <Image
          source={require('../images/floatingaction.png')}
          style={{
            resizeMode: 'center',
            width: 70,
            height: 70,
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
