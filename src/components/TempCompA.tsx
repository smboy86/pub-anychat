import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import Text from './base/Text';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export default function TempCompA({title}: SectionProps): JSX.Element {
  return (
    <View className="flex justify-center items-center bg-gray-400 border-2">
      <Text className="">{title}</Text>
    </View>
  );
}
