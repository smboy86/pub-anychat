import React from 'react';
import {View, Pressable, Alert} from 'react-native';
import Text from '@components/base/Text';

export default function TempScreen({navigation, route}) {
  // navigation props
  /*
    {"navigation": {"addListener": [Function addListener], "canGoBack": [Function canGoBack], "dispatch": [Function dispatch], "getId": [Function getId], "getParent": [Function getParent], "getState": [Function anonymous], "goBack": [Function anonymous], "isFocused": [Function isFocused], "navigate": [Function anonymous], "pop": [Function anonymous], "popToTop": [Function anonymous], "push": [Function anonymous], "removeListener": [Function removeListener], "replace": [Function anonymous], "reset": [Function anonymous], "setOptions": [Function setOptions], "setParams": [Function anonymous]}, "route": {"key": "Login-i7Mo4DznkbI9GCVjjZCm4", "name": "Login", "params": undefined}}
  */
  return (
    <View className="flex-1 justify-center items-center">
      <Text size={19}>[ {route.name} Screen ] </Text>
      <View className="w-full flex items-center mt-4">
        <Pressable className="border p-2 mt-2" onPress={() => Alert.alert('')}>
          <Text>버튼</Text>
        </Pressable>
      </View>
    </View>
  );
}
