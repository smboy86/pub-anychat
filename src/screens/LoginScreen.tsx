import React from 'react';
import {View, Pressable} from 'react-native';
import Text from '@components/base/Text';
import {useTempStore} from 'store/store';

export default function LoginScreen({navigation, route}) {
  const {isLogin, toggleLogin} = useTempStore(state => state);

  return (
    <View className="flex-1 justify-center items-center bg-lime-100">
      <Text size={19}>[ {route.name} Screen ] </Text>
      <View className="w-full flex items-center mt-4">
        <Pressable className="border rounded p-2" onPress={toggleLogin}>
          <Text>{isLogin ? '로그아웃' : '로그인'}</Text>
        </Pressable>
      </View>
      <View className="w-full flex items-center mt-4">
        <Text size={16}># 화면 전환 #</Text>
        <Pressable
          className="border rounded p-2"
          onPress={() => navigation.navigate('Join')}>
          <Text>Join 화면으로</Text>
        </Pressable>
      </View>
    </View>
  );
}
