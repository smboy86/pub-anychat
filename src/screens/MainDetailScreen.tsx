import React from 'react';
import {View} from 'react-native';
import Text from '@components/base/Text';

export default function MainDetailScreen({navigation, route}) {
  return (
    <View className="flex-1 justify-center items-center bg-emerald-100">
      <Text size={19}>[ {route.name} Screen ] </Text>
      <View className="w-full flex items-center mt-4">
        <Text>디테일 페이지 입니다.</Text>
      </View>
    </View>
  );
}
