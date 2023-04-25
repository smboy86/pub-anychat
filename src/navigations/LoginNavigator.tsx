import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '@screens/LoginScreen';
import {LoginParamList} from '@type/nav.types';
import JoinScreen from '@screens/JoinScreen';

const LoginStack = createStackNavigator<LoginParamList>();

export const LoginNavigator = () => (
  <LoginStack.Navigator
    screenOptions={{
      animationEnabled: true,
      headerStyle: {
        elevation: 0,
      },
    }}>
    <LoginStack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <LoginStack.Screen
      name="Join"
      component={JoinScreen}
      options={{headerShown: false}}
    />
  </LoginStack.Navigator>
);

export default LoginNavigator;
