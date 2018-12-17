import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    Actions.homePage();
    // const { photo,
    //   name,
    //  lastName,
    //  about,
    //  address,
    //  city,
    //  zip,
    //  statename,
    //  phone,
    //  gender,
    //  ssn,
    //  ein,
    //  ethnicity,
    //  countryname,
    //  companyname,
    //  agencyname,
    //  language1,
    //  rate1,
    //  language2,
    //  rate2,
    //  language3,
    //  rate3,
    //  mondayam,
    //  mondaypm,
    //  tuesdayam,
    //  tuesdaypm,
    //  wednesdayam,
    //  wednesdaypm,
    //  thursdayam,
    //  thursdaypm,
    //  fridayam,
    //  fridaypm,
    //  saturdayam,
    //  saturdaypm,
    //  sundayam,
    //  sundaypm } = this.props;
    //
    // this.props.employeeCreate({ photo,
    //   name,
    //   lastName,
    //   about,
    //   address,
    //   city,
    //   zip,
    //   statename,
    //   phone,
    //   gender: gender || 'Male',
    //   ssn,
    //   ein,
    //   ethnicity,
    //   countryname,
    //   companyname,
    //   agencyname,
    //   language1,
    //   rate1,
    //   language2,
    //   rate2,
    //   language3,
    //   rate3,
    //   mondayam: mondayam || '12am',
    //   mondaypm: mondaypm || '1pm',
    //   tuesdayam: tuesdayam || '12am',
    //   tuesdaypm: tuesdaypm || '1pm',
    //   wednesdayam: wednesdayam || '12am',
    //   wednesdaypm: wednesdaypm || '1pm',
    //   thursdayam: thursdayam || '12am',
    //   thursdaypm: thursdaypm || '1pm',
    //   fridayam: fridayam || '12am',
    //   fridaypm: fridaypm || '1pm',
    //   saturdayam: saturdayam || '12am',
    //   saturdaypm: saturdaypm || '1pm',
    //   sundayam: sundayam || '12am',
    //   sundaypm: sundaypm || '1pm' });
  }

  render() {
    return (
      <ScrollView>
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
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
    phone,
    city,
    zip,
    statename,
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
    mondaypm } = state.employeeForm;

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
    mondaypm };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate);
