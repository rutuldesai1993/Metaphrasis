import React from 'react';
import { View, Text } from 'react-native';

const NonEditableTextCenter = ({ label }) => {
  const { labelStyle } = styles;

  return (
    <View>
      <Text style={labelStyle}>{label}</Text>
    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 15,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center'
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { NonEditableTextCenter };
