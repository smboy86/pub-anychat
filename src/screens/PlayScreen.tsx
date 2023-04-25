import React from 'react';
import {View} from 'react-native';
import Text from '@components/base/Text';
import WebView from 'react-native-webview';

export default function PlayScreen({navigation, route}) {
  return (
    <View className="flex-1 justify-center items-center bg-lime-100">
      <Text size={19}>[ {route.name} Screen ] </Text>
      <WebView source={{uri: 'https://infinite.red'}} style={{marginTop: 20}} />
    </View>
  );
}
