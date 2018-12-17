import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { Button, CardSection, Card, Confirm } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  state = { showModal: false, AcceptDecline: 'Accept or Decline' };

  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  onAccept() {
    this.setState({ showModal: false });
    this.setState({ AcceptDecline: 'Accepted' });
  }

  onDecline() {
    this.setState({ showModal: false });
    this.setState({ AcceptDecline: 'Declined' });
  }
  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <Card>
            <CardSection>
            <Text style={{ flex: 1 }}>
            Date: {library.date}
            </Text>
            </CardSection>
            <CardSection>
            <Text style={{ flex: 1 }}>
            Time: {library.time}
            </Text>
            </CardSection>
            <CardSection>
            <Text style={{ flex: 1 }}>
            Email: {library.email}
            </Text>
            </CardSection>
            <CardSection>
            <Text style={{ flex: 1 }}>
            Hourly Rate: {library.rate}
            </Text>
            </CardSection>
            <CardSection>
            <Text style={{ flex: 1 }}>
            Language: {library.language}
            </Text>
            </CardSection>
            <CardSection>
            <Text style={{ flex: 1 }}>
            Notes: {library.description}
          </Text>
        </CardSection>
        <CardSection>
        <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
        {this.state.AcceptDecline}
        </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Do you want to accept or decline the job?
        </Confirm>
      </Card>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, company } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {company}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
