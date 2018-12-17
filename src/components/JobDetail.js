import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from '../actions';

const theme = getTheme();

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    paddingBottom: 20,
    marginBottom: 20,
    borderColor: 'lightgrey',
    borderWidth: 0.5,
  },
  title1: {
      top: 10,
      left: 80,
      fontSize: 24,
  },
  title2: {
      top: 35,
      left: 82,
      fontSize: 18,
  },
  textArea: {
      flexDirection: 'row',
      paddingLeft: 20,
      paddingTop: 10,
      width: 260,
  },
  textIcons: {
      color: '#26a69a',
  },
});

class PeopleDetail extends Component {

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[theme.cardStyle, styles.card]}>
        <EvilIcon name={'user'} size={100} style={styles.icon}/>
        <SimpleIcon name={'close'} size={30} style={styles.closeIcon}
            onPress={() => this.props.noneSelected()} />
        <Text style={[theme.cardTitleStyle, styles.title1]}>{this.props.jobs.client_name}</Text>
        <Text style={[theme.cardTitleStyle, styles.title2]}>from {this.props.jobs.language}</Text>
        <View style={styles.textArea}>
           <Text style={theme.cardContentStyle}>{this.props.jobs.phone}</Text>
        </View>
        <View style={styles.textArea}>
           <Text style={theme.cardContentStyle}>{this.props.jobs.email}</Text>
        </View>
        <View style={styles.textArea}>
           <Text style={theme.cardContentStyle}>{this.props.jobs.date}</Text>
        </View>
        <View style={styles.textArea}>
           <Text style={theme.cardContentStyle}>{this.props.jobs.notes}</Text>
        </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
      jobs: state.jobSelected,
   };
};

export default connect(mapStateToProps, actions)(JobDetail);
