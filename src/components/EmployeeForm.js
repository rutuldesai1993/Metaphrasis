import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
 import PhotoUpload from 'react-native-photo-upload';
import { employeeUpdate } from '../actions';
import { MultiLineInput, CardSection, Input, DoubleNonEditableText, DoubleInput,
          NonEditableText, NonEditableTextCenter } from './common';


class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
        <PhotoUpload
          photoPickerTitle='Select Photo:'
          onPhotoSelect={value => this.props.employeeUpdate({ prop: 'photo', value })}
        >
                <Image
                   style={{
                     paddingVertical: 30,
                     width: 150,
                     height: 150,
                     borderRadius: 75
                   }}
                   resizeMode='cover'
                   source={{
                     uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg' }}
                />
      </PhotoUpload>
        </CardSection>
        <CardSection>
          <Input
            label="First Name"
            placeholder="First Name"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Last Name"
            placeholder="Last Name"
            value={this.props.lastName}
            onChangeText={value => this.props.employeeUpdate({ prop: 'lastName', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection>
        <MultiLineInput
        label="Address:"
          placeholder="Address"
          value={this.props.address}
          onChangeText={value => this.props.employeeUpdate({ prop: 'address', value })}
        />
      </CardSection>
      <CardSection>
        <Input
          label="City"
          placeholder="City Name"
          value={this.props.city}
          onChangeText={value => this.props.employeeUpdate({ prop: 'city', value })}
        />
      </CardSection>
      <CardSection>
        <Input
          label="ZIP Code"
          placeholder="55555"
          value={this.props.zip}
          onChangeText={value => this.props.employeeUpdate({ prop: 'zip', value })}
        />
      </CardSection>
      <CardSection>
        <Input
          label="State"
          placeholder="State Name"
          value={this.props.statename}
          onChangeText={value => this.props.employeeUpdate({ prop: 'statename', value })}
        />
      </CardSection>
      <CardSection>
      <MultiLineInput
        label="About me:"
        placeholder="Describe Yourself"
        value={this.props.about}
         onChangeText={value => this.props.employeeUpdate({ prop: 'about', value })}
      />
    </CardSection>
        <CardSection style={{ flexDirection: 'row' }}>
          <Text style={styles.pickerTextStyle}>Gender</Text>
          <Picker
           style={styles2.onePicker} itemStyle={styles2.onePickerItem}
          selectedValue={this.props.gender}
          onValueChange={value => this.props.employeeUpdate({ prop: 'gender', value })}
          >
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
        </CardSection>
        <CardSection>
          <Input
          secureTextEntry
            label="SSN/EIN"
            placeholder="SSN/EIN"
            value={this.props.ssn}
             onChangeText={value => this.props.employeeUpdate({ prop: 'ssn', value })}
          />
          </CardSection>
          <CardSection>
            <Input
            label="Ethnicity"
              placeholder="Ethnicity"
              value={this.props.ethnicity}
               onChangeText={value => this.props.employeeUpdate({ prop: 'ethnicity', value })}
            />
          </CardSection>
          <CardSection>
            <Input
            label="Country of Origin"
              placeholder="Country Name"
              value={this.props.countryname}
              onChangeText={value => this.props.employeeUpdate({ prop: 'countryname', value })}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Company/Agency Name"
              placeholder="Company/Agency Name"
              value={this.props.companyname}
              onChangeText={value => this.props.employeeUpdate({ prop: 'companyname', value })}
            />
          </CardSection>
          <CardSection>
            <DoubleNonEditableText
            label="Skilled Language:"
            label2="Hourly Rate in Dollars:"
            />
          </CardSection>
          <CardSection>
            <DoubleInput
              placeholder="Language 1"
              value={this.props.language1}
              onChangeText={value => this.props.employeeUpdate({ prop: 'language1', value })}
              placeholder2="Rate 1"
              value2={this.props.rate1}
              onChangeText2={value => this.props.employeeUpdate({ prop: 'rate1', value })}
            />
          </CardSection>
          <CardSection>
            <DoubleInput
              placeholder="Language 2"
              value={this.props.language2}
              onChangeText={value => this.props.employeeUpdate({ prop: 'language2', value })}
              placeholder2="Rate 2"
              value2={this.props.rate2}
              onChangeText2={value => this.props.employeeUpdate({ prop: 'rate2', value })}
            />
          </CardSection>
          <CardSection>
            <DoubleInput
              placeholder="Language 3"
              value={this.props.language3}
              onChangeText={value => this.props.employeeUpdate({ prop: 'language3', value })}
              placeholder2="Rate 3"
              value2={this.props.rate3}
              onChangeText2={value => this.props.employeeUpdate({ prop: 'rate3', value })}
            />
          </CardSection>
          <CardSection>
            <NonEditableTextCenter
            label="Availability:"
            />
          </CardSection>
          <CardSection>
            <NonEditableText
            label="Monday:"
            />
            <Picker
             style={styles2.onePicker} itemStyle={styles2.onePickerItem}
            selectedValue={this.props.mondayam}
            onValueChange={value => this.props.employeeUpdate({ prop: 'mondayam', value })}
            >
            <Picker.Item label="1am" value="0100" />
            <Picker.Item label="2am" value="0200" />
            <Picker.Item label="3am" value="0300" />
            <Picker.Item label="4am" value="0400" />
            <Picker.Item label="5am" value="0500" />
            <Picker.Item label="6am" value="0600" />
            <Picker.Item label="7am" value="0700" />
            <Picker.Item label="8am" value="0800" />
            <Picker.Item label="9am" value="0900" />
            <Picker.Item label="10am" value="1000" />
            <Picker.Item label="11am" value="1100" />
            <Picker.Item label="12pm" value="1200" />
            <Picker.Item label="NA" value="NA" />
          </Picker>
          <NonEditableTextCenter
          label="to"
          />
          <Picker
           style={styles2.onePicker} itemStyle={styles2.onePickerItem}
          selectedValue={this.props.mondaypm}
          onValueChange={value => this.props.employeeUpdate({ prop: 'mondaypm', value })}
          >
          <Picker.Item label="1pm" value="1300" />
          <Picker.Item label="2pm" value="1400" />
          <Picker.Item label="3pm" value="1500" />
          <Picker.Item label="4pm" value="1600" />
          <Picker.Item label="5pm" value="1700" />
          <Picker.Item label="6pm" value="1800" />
          <Picker.Item label="7pm" value="1900" />
          <Picker.Item label="8pm" value="2000" />
          <Picker.Item label="9pm" value="2100" />
          <Picker.Item label="10pm" value="2200" />
          <Picker.Item label="11pm" value="2300" />
          <Picker.Item label="12am" value="0000" />
          <Picker.Item label="NA" value="NA" />
        </Picker>
          </CardSection>
          <CardSection>
            <NonEditableText
            label="Tuesday:"
            />
            <Picker
             style={styles2.onePicker} itemStyle={styles2.onePickerItem}
            selectedValue={this.props.tuesdayam}
            onValueChange={value => this.props.employeeUpdate({ prop: 'tuesdayam', value })}
            >
            <Picker.Item label="1am" value="0100" />
            <Picker.Item label="2am" value="0200" />
            <Picker.Item label="3am" value="0300" />
            <Picker.Item label="4am" value="0400" />
            <Picker.Item label="5am" value="0500" />
            <Picker.Item label="6am" value="0600" />
            <Picker.Item label="7am" value="0700" />
            <Picker.Item label="8am" value="0800" />
            <Picker.Item label="9am" value="0900" />
            <Picker.Item label="10am" value="1000" />
            <Picker.Item label="11am" value="1100" />
            <Picker.Item label="12pm" value="1200" />
            <Picker.Item label="NA" value="NA" />
          </Picker>
          <NonEditableTextCenter
          label="to"
          />
          <Picker
           style={styles2.onePicker} itemStyle={styles2.onePickerItem}
          selectedValue={this.props.tuesdaypm}
          onValueChange={value => this.props.employeeUpdate({ prop: 'tuesdaypm', value })}
          >
          <Picker.Item label="1pm" value="1300" />
          <Picker.Item label="2pm" value="1400" />
          <Picker.Item label="3pm" value="1500" />
          <Picker.Item label="4pm" value="1600" />
          <Picker.Item label="5pm" value="1700" />
          <Picker.Item label="6pm" value="1800" />
          <Picker.Item label="7pm" value="1900" />
          <Picker.Item label="8pm" value="2000" />
          <Picker.Item label="9pm" value="2100" />
          <Picker.Item label="10pm" value="2200" />
          <Picker.Item label="11pm" value="2300" />
          <Picker.Item label="12am" value="0000" />
          <Picker.Item label="NA" value="NA" />
        </Picker>
          </CardSection>
          <CardSection>
            <NonEditableText
            label="Wednesday:"
            />
            <Picker
             style={styles2.onePicker} itemStyle={styles2.onePickerItem}
            selectedValue={this.props.wednesdayam}
            onValueChange={value => this.props.employeeUpdate({ prop: 'wednesdayam', value })}
            >
            <Picker.Item label="1am" value="0100" />
            <Picker.Item label="2am" value="0200" />
            <Picker.Item label="3am" value="0300" />
            <Picker.Item label="4am" value="0400" />
            <Picker.Item label="5am" value="0500" />
            <Picker.Item label="6am" value="0600" />
            <Picker.Item label="7am" value="0700" />
            <Picker.Item label="8am" value="0800" />
            <Picker.Item label="9am" value="0900" />
            <Picker.Item label="10am" value="1000" />
            <Picker.Item label="11am" value="1100" />
            <Picker.Item label="12pm" value="1200" />
            <Picker.Item label="NA" value="NA" />
          </Picker>
          <NonEditableTextCenter
          label="to"
          />
          <Picker
           style={styles2.onePicker} itemStyle={styles2.onePickerItem}
          selectedValue={this.props.wednesdaypm}
          onValueChange={value => this.props.employeeUpdate({ prop: 'wednesdaypm', value })}
          >
          <Picker.Item label="1pm" value="1300" />
          <Picker.Item label="2pm" value="1400" />
          <Picker.Item label="3pm" value="1500" />
          <Picker.Item label="4pm" value="1600" />
          <Picker.Item label="5pm" value="1700" />
          <Picker.Item label="6pm" value="1800" />
          <Picker.Item label="7pm" value="1900" />
          <Picker.Item label="8pm" value="2000" />
          <Picker.Item label="9pm" value="2100" />
          <Picker.Item label="10pm" value="2200" />
          <Picker.Item label="11pm" value="2300" />
          <Picker.Item label="12am" value="0000" />
          <Picker.Item label="NA" value="NA" />
        </Picker>
          </CardSection>
          <CardSection>
            <NonEditableText
            label="Thursday:"
            />
            <Picker
             style={styles2.onePicker} itemStyle={styles2.onePickerItem}
            selectedValue={this.props.thursdayam}
            onValueChange={value => this.props.employeeUpdate({ prop: 'thursdayam', value })}
            >
            <Picker.Item label="1am" value="0100" />
            <Picker.Item label="2am" value="0200" />
            <Picker.Item label="3am" value="0300" />
            <Picker.Item label="4am" value="0400" />
            <Picker.Item label="5am" value="0500" />
            <Picker.Item label="6am" value="0600" />
            <Picker.Item label="7am" value="0700" />
            <Picker.Item label="8am" value="0800" />
            <Picker.Item label="9am" value="0900" />
            <Picker.Item label="10am" value="1000" />
            <Picker.Item label="11am" value="1100" />
            <Picker.Item label="12pm" value="1200" />
            <Picker.Item label="NA" value="NA" />
          </Picker>
          <NonEditableTextCenter
          label="to"
          />
          <Picker
           style={styles2.onePicker} itemStyle={styles2.onePickerItem}
          selectedValue={this.props.thursdaypm}
          onValueChange={value => this.props.employeeUpdate({ prop: 'thursdaypm', value })}
          >
          <Picker.Item label="1pm" value="1300" />
          <Picker.Item label="2pm" value="1400" />
          <Picker.Item label="3pm" value="1500" />
          <Picker.Item label="4pm" value="1600" />
          <Picker.Item label="5pm" value="1700" />
          <Picker.Item label="6pm" value="1800" />
          <Picker.Item label="7pm" value="1900" />
          <Picker.Item label="8pm" value="2000" />
          <Picker.Item label="9pm" value="2100" />
          <Picker.Item label="10pm" value="2200" />
          <Picker.Item label="11pm" value="2300" />
          <Picker.Item label="12am" value="0000" />
          <Picker.Item label="NA" value="NA" />
        </Picker>
          </CardSection>
          <CardSection>
            <NonEditableText
            label="Friday:"
            />
            <Picker
             style={styles2.onePicker} itemStyle={styles2.onePickerItem}
            selectedValue={this.props.fridayam}
            onValueChange={value => this.props.employeeUpdate({ prop: 'fridayam', value })}
            >
            <Picker.Item label="1am" value="0100" />
            <Picker.Item label="2am" value="0200" />
            <Picker.Item label="3am" value="0300" />
            <Picker.Item label="4am" value="0400" />
            <Picker.Item label="5am" value="0500" />
            <Picker.Item label="6am" value="0600" />
            <Picker.Item label="7am" value="0700" />
            <Picker.Item label="8am" value="0800" />
            <Picker.Item label="9am" value="0900" />
            <Picker.Item label="10am" value="1000" />
            <Picker.Item label="11am" value="1100" />
            <Picker.Item label="12pm" value="1200" />
            <Picker.Item label="NA" value="NA" />
            <Picker.Item label="NA" value="NA" />
          </Picker>
          <NonEditableTextCenter
          label="to"
          />
          <Picker
           style={styles2.onePicker} itemStyle={styles2.onePickerItem}
          selectedValue={this.props.fridaypm}
          onValueChange={value => this.props.employeeUpdate({ prop: 'fridaypm', value })}
          >
          <Picker.Item label="1pm" value="1300" />
          <Picker.Item label="2pm" value="1400" />
          <Picker.Item label="3pm" value="1500" />
          <Picker.Item label="4pm" value="1600" />
          <Picker.Item label="5pm" value="1700" />
          <Picker.Item label="6pm" value="1800" />
          <Picker.Item label="7pm" value="1900" />
          <Picker.Item label="8pm" value="2000" />
          <Picker.Item label="9pm" value="2100" />
          <Picker.Item label="10pm" value="2200" />
          <Picker.Item label="11pm" value="2300" />
          <Picker.Item label="12am" value="0000" />
          <Picker.Item label="NA" value="NA" />
        </Picker>
          </CardSection>
          <CardSection>
            <NonEditableText
            label="Saturday:"
            />
            <Picker
             style={styles2.onePicker} itemStyle={styles2.onePickerItem}
            selectedValue={this.props.saturdayam}
            onValueChange={value => this.props.employeeUpdate({ prop: 'saturdayam', value })}
            >
            <Picker.Item label="1am" value="0100" />
            <Picker.Item label="2am" value="0200" />
            <Picker.Item label="3am" value="0300" />
            <Picker.Item label="4am" value="0400" />
            <Picker.Item label="5am" value="0500" />
            <Picker.Item label="6am" value="0600" />
            <Picker.Item label="7am" value="0700" />
            <Picker.Item label="8am" value="0800" />
            <Picker.Item label="9am" value="0900" />
            <Picker.Item label="10am" value="1000" />
            <Picker.Item label="11am" value="1100" />
            <Picker.Item label="12pm" value="1200" />
            <Picker.Item label="NA" value="NA" />
          </Picker>
          <NonEditableTextCenter
          label="to"
          />
          <Picker
           style={styles2.onePicker} itemStyle={styles2.onePickerItem}
          selectedValue={this.props.saturdaypm}
          onValueChange={value => this.props.employeeUpdate({ prop: 'saturdaypm', value })}
          >
          <Picker.Item label="1pm" value="1300" />
          <Picker.Item label="2pm" value="1400" />
          <Picker.Item label="3pm" value="1500" />
          <Picker.Item label="4pm" value="1600" />
          <Picker.Item label="5pm" value="1700" />
          <Picker.Item label="6pm" value="1800" />
          <Picker.Item label="7pm" value="1900" />
          <Picker.Item label="8pm" value="2000" />
          <Picker.Item label="9pm" value="2100" />
          <Picker.Item label="10pm" value="2200" />
          <Picker.Item label="11pm" value="2300" />
          <Picker.Item label="12am" value="0000" />
          <Picker.Item label="NA" value="NA" />
        </Picker>
          </CardSection>
          <CardSection>
            <NonEditableText
            label="Sunday:"
            />
            <Picker
             style={styles2.onePicker} itemStyle={styles2.onePickerItem}
            selectedValue={this.props.sundayam}
            onValueChange={value => this.props.employeeUpdate({ prop: 'sundayam', value })}
            >
            <Picker.Item label="1am" value="0100" />
            <Picker.Item label="2am" value="0200" />
            <Picker.Item label="3am" value="0300" />
            <Picker.Item label="4am" value="0400" />
            <Picker.Item label="5am" value="0500" />
            <Picker.Item label="6am" value="0600" />
            <Picker.Item label="7am" value="0700" />
            <Picker.Item label="8am" value="0800" />
            <Picker.Item label="9am" value="0900" />
            <Picker.Item label="10am" value="1000" />
            <Picker.Item label="11am" value="1100" />
            <Picker.Item label="12pm" value="1200" />
            <Picker.Item label="NA" value="NA" />
          </Picker>
          <NonEditableTextCenter
          label="to"
          />
          <Picker
           style={styles2.onePicker} itemStyle={styles2.onePickerItem}
          selectedValue={this.props.sundaypm}
          onValueChange={value => this.props.employeeUpdate({ prop: 'sundaypm', value })}
          >
          <Picker.Item label="1pm" value="1300" />
          <Picker.Item label="2pm" value="1400" />
          <Picker.Item label="3pm" value="1500" />
          <Picker.Item label="4pm" value="1600" />
          <Picker.Item label="5pm" value="1700" />
          <Picker.Item label="6pm" value="1800" />
          <Picker.Item label="7pm" value="1900" />
          <Picker.Item label="8pm" value="2000" />
          <Picker.Item label="9pm" value="2100" />
          <Picker.Item label="10pm" value="2200" />
          <Picker.Item label="11pm" value="2300" />
          <Picker.Item label="12am" value="0000" />
          <Picker.Item label="NA" value="NA" />
        </Picker>
          </CardSection>
        </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    paddingRight: 75,
    fontSize: 15,
    paddingLeft: 5
  },
  radioTextStyle: {
    fontSize: 15,
    paddingLeft: 5,
    paddingRight: 5
  }
};
const styles2 = StyleSheet.create({
  onePicker: {
    width: 100,
    height: 44,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
  },
  onePickerItem: {
    height: 44,
    color: 'red'
  }
  });
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
