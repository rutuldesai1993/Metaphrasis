import React from 'react';
import { TextInput, View } from 'react-native';

const DoubleInput = ({ value, onChangeText, placeholder, value2, onChangeText2, placeholder2 }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
    <TextInput
      placeholder={placeholder}
      style={inputStyle}
      value={value}
      onChangeText={onChangeText}
    />
      <TextInput
        placeholder={placeholder2}
        style={labelStyle}
        value2={value2}
        onChangeText={onChangeText2}
      />
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

export { DoubleInput };
