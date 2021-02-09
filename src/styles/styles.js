import {useWindowDimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 7,
    borderColor: 'grey',
    marginTop: 50,
    marginLeft: '15%',
    height: 50,
    width: 285,
    backgroundColor: 'lightgrey',
  },
  buttontext: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    marginTop:5,
    fontWeight:"bold"
  },
  btn: {
    position: 'absolute',
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '80%',
    marginTop: '160%',
    borderRadius:100
  },
  plus: {
    color: 'black',
    fontSize: 30,
  },
  textst: {
    fontSize: 35,
    justifyContent: 'center',
  },
  delbtn: {
    width: 40,
    height: 40,
    marginLeft: '80%',
    position:'relative',
    marginTop:-35
  },
});
