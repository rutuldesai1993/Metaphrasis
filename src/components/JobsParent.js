import React, { Component } from 'react';
import { View } from 'react-native';
 import LibraryList from './LibraryList';

class JobsParent extends Component {

  render() {
    return (
      <View styles={{ flex: 1, paddingTop: 100, paddingLeft: 50 }}>
      <LibraryList />
        </View>
  );
}
}
export default JobsParent;
