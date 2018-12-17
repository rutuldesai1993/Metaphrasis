import React from 'react';
import { View, Text } from 'react-native';

const NonEditableText = ({ label }) => {
  const { labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
    </View>
  );
};

const styles = {
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

export { NonEditableText };
