import React from 'react';
import {Pressable, View} from 'react-native';
import Text from '@components/base/Text';
import {useTempStore} from 'store/store';

export default function MoreScreen({navigation, route}) {
  const {toggleLogin} = useTempStore(state => state);

  return (
    <View className="flex-1 justify-center items-center bg-green-100">
      <Text size={19}>[ {route.name} Screen ] </Text>
      <View className="w-full flex items-center mt-4">
        <Text>설정</Text>
        <View className="w-full flex items-center mt-4">
          <Pressable className="border rounded p-2" onPress={toggleLogin}>
            <Text>로그아웃</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
