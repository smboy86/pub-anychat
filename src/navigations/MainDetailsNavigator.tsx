import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainDetailScreen from '@screens/MainDetailScreen';

const Stack = createStackNavigator();

export const MainDetailsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      animationEnabled: true,
      headerTintColor: '#000',
      headerStyle: {
        elevation: 0,
      },
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
      headerBackTitle: ' ',
      headerLeftContainerStyle: {
        marginLeft: 16,
      },
    }}>
    <Stack.Screen
      name="MainDetail"
      component={MainDetailScreen}
      options={{
        presentation: 'card',
      }}
    />
  </Stack.Navigator>
);

export default MainDetailsNavigator;
