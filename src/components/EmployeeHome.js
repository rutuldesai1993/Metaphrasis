import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection } from './common';

class HomePage extends Component {
  onProfilePress() {
    Actions.employeeCreate();
  }
  onCertificationPress() {
    Actions.upload();
  }
  onLogoutPress() {
    Actions.login();
  }
  render() {
    return (
      <Card>
      <CardSection>
        <Button onPress={this.onProfilePress}>
        Profile
        </Button>
      </CardSection>
      <CardSection>
      <Button onPress={this.onCertificationPress}>
        Upload Certification
      </Button>
      </CardSection>
      <CardSection>
      <Button onPress={this.onLogoutPress}>
        Logout
      </Button>
      </CardSection>
      </Card>
    );
  }
}

export default HomePage;

// <CardSection>
// <Button onPress={this.onEditProfilePress}>
//   Edit Profile
// </Button>
// </CardSection>
// onEditProfilePress() {
//   Actions.employeeEdit();
// }
