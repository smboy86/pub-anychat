import React from 'react';
import {Pressable, View} from 'react-native';
import Text from '@components/base/Text';

export default function PlayScreen({navigation, route}) {
  return (
    <View className="flex-1 justify-center items-center bg-yellow-100">
      <Text size={19}>[ {route.name} Screen ] </Text>
      <View className="w-full flex items-center mt-4">
        <Text>채팅 친구가 아직 없어요</Text>
      </View>
      <View className="w-full flex items-center mt-4">
        <Text size={16}># 상세 화면 띄우기 #</Text>
        <Pressable
          className="border rounded p-2"
          onPress={() =>
            navigation.navigate('Details', {screen: 'MainDetail'})
          }>
          <Text>상세화면</Text>
        </Pressable>
      </View>
    </View>
  );
}
