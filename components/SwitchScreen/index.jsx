import React from 'react';
import { Text, View } from 'react-native';
import { style } from './style';

export default ({ text }) => (
  <View style={style.switchscreen}>
    <Text style={style.switchscreenText}>{text}</Text>
  </View>
);

