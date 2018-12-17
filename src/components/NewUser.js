import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import firebase from 'firebase';

class SignUpScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photo: '',
      name: '',
      email: '',
      password: '',
      lastName: '',
      about: '',
      address: '',
      city: '',
      pin: '',
      statename: '',
      phone: '',
      gender: '',
      ssn: '',
      ethnicity: '',
      countryname: '',
      companyname: '',
      agencyname: '',
      language1: '',
      rate1: '',
      language2: '',
      rate2: '',
      language3: '',
      rate3: '',
      mondayam: '',
      mondaypm: '',
      tuesdayam: '',
      tuesdaypm: '',
      wednesdayam: '',
      wednesdaypm: '',
      thursdayam: '',
      thursdaypm: '',
      fridayam: '',
      fridaypm: '',
      saturdayam: '',
      saturdaypm: '',
      sundayam: '',
      sundaypm: '',
      position: 1,
      interval: null
    };
  }
  getFirebaseRef() {
    return firebase.database().ref();
  }
  isAttempting = false;
  handleChangeName = (text) => {
    this.setState({ name: text });
  }
  handleChangeLastName = (text) => {
    this.setState({ lastName: text });
  }
  handleChangeEmail = (text) => {
    this.setState({ email: text });
  }
  handleChangePhoneNumber = (text) => {
    this.setState({ phone: text });
  }
  handleChangePassword = (text) => {
    this.setState({ password: text });
  }
  //Creates a new user and if that is successful, updates the user information.
  handlePressSignup = () => {
    const { name, lastName, email, phone, password } = this.state;
    const { navigate } = this.props.navigation;
    firebase.auth().createUserWithEmailAndPassword(email, password).then((data) => {
      //Alert.alert('UserId',JSON.stringify(data))

      this.isAttempting = false;
      this.getFirebaseRef().child('users').push({
        name,
        lastName,
        userId: data.uid,
        email,
        phone
      }).then(() => {
        firebase.auth().currentUser.sendEmailVerification().then(() => {
          navigate('login');
          Alert('Please check your email for the verification link');
        }).catch((error) => {
          // Handle Errors here.
          const errorMessage = error.message;
          Alert(errorMessage);
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        Alert(errorMessage);
      });
    }).catch((error) => {
      // Handle Errors here.
      const errorMessage = error.message;
      Alert(errorMessage);
    });
  }
  render() {
    const { name,
      email,
      password,
     lastName,
     phone
  } = this.state;
    return (
        <ScrollView>
        <View>
              <Text>
              Complete the fields below
              </Text>
              <Text>
              to register!
            </Text>
            </View>
            <View>
                <TextInput
                ref='name'
                value={name}
                keyboardType='default'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleChangeName}
                underlineColorAndroid='transparent'
                onSubmitEditing={() => this.refs.email.focus()}
                placeholder='Name'
                />
            </View>
            <View>
                <TextInput
                ref='last name'
                value={lastName}
                keyboardType='default'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleChangeLastName}
                underlineColorAndroid='transparent'
                onSubmitEditing={() => this.refs.email.focus()}
                placeholder='Last Name'
                />
            </View>

              <View>
              <TextInput
                ref='email'
                value={email}
                keyboardType='default'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleChangeEmail}
                underlineColorAndroid='transparent'
                onSubmitEditing={() => this.refs.phoneNumber.focus()}
                placeholder='Email'
              />
            </View>


              <View>
              <TextInput
                ref='phoneNumber'
                value={phone}
                keyboardType='default'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleChangePhoneNumber}
                underlineColorAndroid='transparent'
                onSubmitEditing={() => this.refs.phoneNumber.focus()}
                placeholder='Phone Number'
              />
             </View>
              <View>
              <TextInput
                ref='password'
                value={password}
                keyboardType='default'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={this.handleChangePassword}
                underlineColorAndroid='transparent'
                secureTextEntry
                onSubmitEditing={() => this.handlePressSignup}
                placeholder='Password'
              />
              </View>
              <View>
                <TouchableOpacity onPress={this.handlePressSignup}>
                <Text>SIGN UP</Text>
                </TouchableOpacity>
              </View>
              </ScrollView>
    );
  }

}

export default SignUpScreen;
