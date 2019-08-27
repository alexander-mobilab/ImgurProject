import React, {Component } from 'react';
import {
  Button,
  View,
  Text,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Wich album would you like to see?</Text>
        <Button
          title="Album 1"
          onPress={() => {
            this.props.navigation.navigate('Images', { itemID: 1 })
          }}
        />
        <Button
          title="Album 2"
          onPress={() => {
            this.props.navigation.navigate('Images', { itemID: 2 })
          }}
        />
      </View>
    );
  }  
}