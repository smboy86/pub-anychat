import React from 'react';
import {View, Pressable} from 'react-native';
import Text from '@components/base/Text';

export default function JoinScreen({navigation, route}) {
  return (
    <View className="flex-1 justify-center items-center bg-orange-100">
      <Text size={19}>[ {route.name} Screen ] </Text>
      <View className="w-full flex items-center mt-4">
        <Text size={16}># 화면 전환 #</Text>
        <Pressable
          className="border rounded p-2"
          onPress={() => navigation.navigate('Login')}>
          <Text>Login 화면으로</Text>
        </Pressable>
      </View>
    </View>
  );
}
