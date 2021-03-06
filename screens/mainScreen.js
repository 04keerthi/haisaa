import React, { Component } from 'react';
import { Text } from 'react-native-elements';
import { View } from 'react-native';
import { SCREEN_TITLES, MAIN_SCREEN } from '../constants/appConstants';

class MainScreen extends Component {
  static navigationOptions = {
    title: SCREEN_TITLES.MAIN
  };

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const {
      displayName, email, phoneNumber, uid
    } = navigation.state.params.currentUser;
    this.state = {
      name: displayName,
      mobileNumber: phoneNumber,
      email,
      uid
    };
    console.log(navigation.state.params.currentUser);
  }

  render() {
    const {
      name, email, mobileNumber, uid
    } = this.state;
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          {MAIN_SCREEN.NAME}
          { name }
        </Text>
        <Text>
          {MAIN_SCREEN.EMAIL}
          { email }
        </Text>
        <Text>
          {MAIN_SCREEN.MOBILE_NO}
          { mobileNumber }
        </Text>
        <Text>
          {MAIN_SCREEN.UID}
          { uid }
        </Text>
      </View>
    );
  }
}

export default MainScreen;
