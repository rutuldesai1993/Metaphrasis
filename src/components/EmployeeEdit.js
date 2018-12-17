import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
//import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { photo,
      name,
      lastName,
      about,
      address,
      city,
      zip,
      statename,
      phone,
      gender,
      ssn,
      ein,
      ethnicity,
      countryname,
      companyname,
      agencyname,
      language1,
      rate1,
      language2,
      rate2,
      language3,
      rate3,
      mondayam,
      mondaypm,
      tuesdayam,
      tuesdaypm,
      wednesdayam,
      wednesdaypm,
      thursdayam,
      thursdaypm,
      fridayam,
      fridaypm,
      saturdayam,
      saturdaypm,
      sundayam,
      sundaypm } = this.props;

    this.props.employeeSave({ photo,
      name,
      lastName,
      about,
      address,
      city,
      zip,
      statename,
      phone,
      gender,
      uid: this.props.employee.uid,
      ssn,
      ein,
      ethnicity,
      countryname,
      companyname,
      agencyname,
      language1,
      rate1,
      language2,
      rate2,
      language3,
      rate3,
      mondayam,
      mondaypm,
      tuesdayam,
      tuesdaypm,
      wednesdayam,
      wednesdaypm,
      thursdayam,
      thursdaypm,
      fridayam,
      fridaypm,
      saturdayam,
      saturdaypm,
      sundayam,
      sundaypm });
  }

  // onTextPress() {
  //   const { phone } = this.props;
  //
  //   Communications.text(phone, 'Your profile has been created on Metaphrasis Application');
  // }

  // onAccept() {
  //   const { uid } = this.props.employee;
  //
  //   this.props.employeeDelete({ uid });
  // }
  //
  // onDecline() {
  //   this.setState({ showModal: false });
  // }

  render() {
    return (
      <ScrollView>
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { photo,
    name,
    lastName,
    about,
    address,
    city,
    zip,
    statename,
    phone,
    gender,
    ssn,
    ein,
    ethnicity,
    countryname,
    companyname,
    agencyname,
    language1,
    rate1,
    language2,
    rate2,
    language3,
    rate3,
    mondayam,
    mondaypm,
    tuesdayam,
    tuesdaypm,
    wednesdayam,
    wednesdaypm,
    thursdayam,
    thursdaypm,
    fridayam,
    fridaypm,
    saturdayam,
    saturdaypm,
    sundayam,
    sundaypm } = state.employeeForm;

  return { photo,
    name,
    lastName,
    about,
    address,
    city,
    zip,
    statename,
    phone,
    gender,
    ssn,
    ein,
    ethnicity,
    countryname,
    companyname,
    agencyname,
    language1,
    rate1,
    language2,
    rate2,
    language3,
    rate3,
    mondayam,
    mondaypm,
    tuesdayam,
    tuesdaypm,
    wednesdayam,
    wednesdaypm,
    thursdayam,
    thursdaypm,
    fridayam,
    fridaypm,
    saturdayam,
    saturdaypm,
    sundayam,
    sundaypm };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeSave
})(EmployeeEdit);


        // <CardSection>
        //   <Button onPress={this.onTextPress.bind(this)}>
        //     Text Schedule
        //   </Button>
        // </CardSection>
        //
        // <CardSection>
        //   <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
        //     Fire Employee
        //   </Button>
        // </CardSection>

        // <Confirm
        //   visible={this.state.showModal}
        //   onAccept={this.onAccept.bind(this)}
        //   onDecline={this.onDecline.bind(this)}
        // >
        //   Are you sure you want to delete this?
        // </Confirm>
