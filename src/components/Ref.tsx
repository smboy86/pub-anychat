import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from './base/Text';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export default function Ref({children, title}: SectionProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
