import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Alert } from 'react-native';
import RegisterScreen from './RegisterScreen'

import { STORAGE_KEY } from './RegisterScreen';

const LoginScreen = ({ navigation }) => {

  const [number, setNumber] = React.useState('');

  const getUsers = () => AsyncStorage.getItem(STORAGE_KEY);

  const handleLogin = async () => {

    try {

      if (!number) {
        Alert.alert('please fill');
        return;
      }

      let users = await getUsers();

      if (users) {

        users = JSON.parse(users);

        const isExistingUser = users.includes(number);

        if (isExistingUser) {
          navigation.navigate('UserList')
        }
        else {
          Alert.alert('Please Register Before Login')
        }
      }

      else {
        Alert.alert('No entries found')
      }

    } catch (error) {

    }

  };

  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Enter number"
        maxLength={10}
        keyboardType="Phone-pad"
        style={styles.textInputStyles}
        value={number}
        placeholderTextColor="#000"
        onChangeText={text => setNumber(text)}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={styles.sendBtn}
      >
        <Text style={styles.textSend}>Send</Text>

      </TouchableOpacity>


      <Text
        style={{ marginTop: 17 }}
        onPress={() => navigation.navigate('RegisterScreen')}>
        Registetr Mobile No
      </Text>


    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyles: {
    borderWidth: 1,
    borderColor: "#000",
    height: 60,
    width: 280,
    marginLeft: 20,
    borderRadius: 5,
    fontSize: 18,
    paddingHorizontal: 15,
    color: "#000",
    marginRight: 20,
  },
  sendBtn: {
    backgroundColor: 'blue',
    marginLeft: 20,
    marginRight: 20,
    padding: 18,
    borderRadius: 10,
    marginTop: 30,
    width: Dimensions.get('window').width - 75
  },
  textSend: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
})
