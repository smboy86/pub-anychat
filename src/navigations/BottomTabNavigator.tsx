import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '@screens/LoginScreen';
import FriendsScreen from '@screens/FriendsScreen';
import ChatScreen from '@screens/ChatScreen';
import PlayScreen from '@screens/PlayScreen';
import MoreScreen from '@screens/MoreScreen';
// import Feather from 'react-native-vector-icons/Feather';

// import {BottomTabParamList} from './types';
// import {TempBottomRouteScreen} from '../screens/TempScreens';

const BottomTab = createBottomTabNavigator();

// function TabBarIcon(props: {name: string; color: string}) {
//   return <Feather size={26} style={{marginBottom: -6}} {...props} />;
// }

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
    // options={{
    //   activeTintColor: '#32A05F',
    //   inactiveTintColor: '#757575',
    //   style: {
    //     height: 62,
    //     backgroundColor: '#F9FAF9',
    //     paddingBottom: 10,
    //     borderTopColor: '#F9FAF9',
    //   },
    // }}
    >
      <BottomTab.Screen
        name="Friends"
        component={FriendsScreen}
        options={
          {
            // tabBarIcon: ({ color }) => <TabBarIcon name="check-circle" color={color} />,
          }
        }
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatScreen}
        options={
          {
            // tabBarIcon: ({color}) => <TabBarIcon name="meh" color={color} />,
          }
        }
      />
      <BottomTab.Screen
        name="Play"
        component={PlayScreen}
        options={
          {
            // tabBarIcon: ({ color }) => <TabBarIcon name="file-text" color={color} />,
          }
        }
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={
          {
            // tabBarIcon: ({ color }) => <TabBarIcon name="settings" color={color} />,
          }
        }
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
