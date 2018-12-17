import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';

class ListItem2 extends Component {

  render() {
    const { company } = this.props.libraries;
    console.log({ company });
    return (
        <View>
          <CardSection>
            <Text>
              {company}
            </Text>
          </CardSection>
        </View>
    );
  }
}
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(ListItem2);
