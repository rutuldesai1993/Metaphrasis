import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection } from './common';

class HomePage extends Component {
  onProfilePress() {
    Actions.employeeHome();
  }
  onSchedulePress() {
    Actions.schedule();
  }
  onJobsPress() {
    Actions.libraryList();
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
      <Button onPress={this.onJobsPress}>
        Jobs
      </Button>
      </CardSection>
      <CardSection>
      <Button onPress={this.onSchedulePress}>
        Schedule
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
