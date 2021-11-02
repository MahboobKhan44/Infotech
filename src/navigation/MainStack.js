import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import UserList from '../screens/UserList';



const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="RegisterScreen">

        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen name="UserList" component={UserList} />

        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

      </Stack.Navigator>

    </NavigationContainer>
  );
};
export default MainStack;