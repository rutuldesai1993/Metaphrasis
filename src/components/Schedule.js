import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { Agenda } from 'react-native-calendars';

class Schedule extends Component {
  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }
  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height }]}><Text>Client Name: UIC Hospital</Text>
      <Text>Duration: 2 to 4pm</Text>
      <Text>Address: 801 South Morgan Street</Text></View>
    );
  }
  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }
  render() {
    return (
      <Agenda
        items={{ '2018-12-18': ['item 1 - any js object'] }}
        // loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2018-12-18'}
         renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
         rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
         // monthFormat={'yyyy'}
         // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }
}
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(Schedule);
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});
