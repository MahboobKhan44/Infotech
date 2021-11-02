import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Alert } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEY = "@users";

const RegisterScreen = ({ navigation }) => {

  const [resgisterNumber, setRegisterNumber] = React.useState('');

  const setItem = (value) => AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value));

  const getUsers = () => AsyncStorage.getItem(STORAGE_KEY);

  const isExistingUser = (users, phoneNumber) => users.includes(phoneNumber);

  const addUser = async () => {
    try {

      if (!resgisterNumber) {
        Alert.alert('Please fill')
        return;
      }

      let fetchedUsers = await getUsers();

      if (fetchedUsers) {
        fetchedUsers = JSON.parse(fetchedUsers);
      }
      else {

        fetchedUsers = [];

      }

      if (isExistingUser(fetchedUsers, resgisterNumber)) {
        Alert.alert('Phone Number Already Exists Please Sign in to Continue');
      } else {
        fetchedUsers?.push(resgisterNumber);
        await setItem(fetchedUsers);
        navigation.navigate("LoginScreen");
      }

    } catch (error) {
      console.error("[RegisterScreen] addUser ", error);
    }
  };


  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Enter number"
        maxLength={10}
        keyboardType="Phone-pad"
        style={styles.textInputStyles}
        value={resgisterNumber}
        placeholderTextColor="#000"
        onChangeText={text => setRegisterNumber(text)}
      />


      <TouchableOpacity onPress={addUser} style={styles.sendBtn}>

        <Text style={styles.textSend}>Send</Text>

      </TouchableOpacity>

      <Text
        style={{ marginTop: 17 }}
        onPress={() => navigation.navigate('LoginScreen')}>
        Already a user? Please Sign in
      </Text>

    </View>

  )
}

export default RegisterScreen;



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
    width: Dimensions.get('window').width - 75,
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
    width: Dimensions.get('window').width - 75,
  },
  textSend: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
})
