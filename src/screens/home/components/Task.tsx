import {View, Text} from 'react-native';
import React from 'react';
import {style} from '../Style';

interface TaskProps {
  item: any;
}

export default function Task({item}: TaskProps) {
  return (
    <View style={[style.task, style.shadow, style.mr8, style.ml8]}>
      <Text style={style.textColor}>{item.title}</Text>
    </View>
  );
}
