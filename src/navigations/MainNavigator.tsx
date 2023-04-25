import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import MainDetailsNavigator from './MainDetailsNavigator';

const Root = createStackNavigator();

export const MainNavigator = () => (
  <Root.Navigator
    screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: '#fff',
        shadowOffset: {height: 0, width: 0},
        elevation: 0,
      },
    }}>
    <Root.Screen name="MainBottom" component={BottomTabNavigator} />
    <Root.Screen
      name="Details"
      component={MainDetailsNavigator}
      options={{
        headerShown: false,
        title: ' ',
        headerTitleStyle: {
          fontSize: 15,
          alignSelf: 'center',
        },
      }}
    />
    {/* For Modal Screen */}
    {/* <Root.Screen
      name="AppModal"
      component={TempScreen}
      options={{
        headerShown: true,
        title: 'AppModal',
        headerTitleStyle: {
          fontFamily: 'NotoSansKR-Medium',
          fontSize: 15,
          alignSelf: 'center',
        },
        headerLeft: null,
        headerRight: null,
      }}
    /> */}
  </Root.Navigator>
);

export default MainNavigator;
