import React from 'react';
import { View, Text } from 'react-native';

const DoubleNonEditableText = ({ label, label2 }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={inputStyle}>{label}</Text>
      <Text style={labelStyle}>{label2}</Text>
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 15,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 15,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { DoubleNonEditableText };
