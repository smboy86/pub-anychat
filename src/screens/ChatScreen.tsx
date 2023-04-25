import React from 'react';
import {View} from 'react-native';
import Text from '@components/base/Text';

export default function ChatScreen({navigation, route}) {
  return (
    <View className="flex-1 justify-center items-center bg-amber-100">
      <Text size={19}>[ {route.name} Screen ] </Text>
      <View className="w-full flex items-center mt-4">
        <Text>채팅 이력이 아직 없어요</Text>
      </View>
    </View>
  );
}
