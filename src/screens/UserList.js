import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState, FlatList } from 'react'
import { View, Text } from 'react-native'
import { STORAGE_KEY } from './RegisterScreen'

export default function UserList() {

  const [users, setUsers] = useState([]);

  const getUsers = () => AsyncStorage.getItem(STORAGE_KEY);

  const fetchUsers = async () => {
    try {
      let fetchedUsers = await getUsers();
      if (fetchUsers) {
        fetchedUsers = JSON.parse(fetchedUsers);
        setUsers(fetchedUsers)
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={{ flex: 1, marginLeft: 25, marginTop: 50 }}>
      {
        users.map(phoneNumber => (

          <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 8 }}>

            <Text style={{ fontSize: 18, color: "black", fontWeight: 'bold' }}>Mobile Number:- </Text>

            <Text style={{ fontSize: 16, color: "black" }}>{phoneNumber}</Text>

          </View>
        ))
      }
    </View>
  )
}
