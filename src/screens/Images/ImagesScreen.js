import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

export default class ImagesScreen extends Component {
  render() {
    const { navigation } = this.props;
    const itemID = navigation.getParam('itemID');
    
    const imageMapper = {
      '1': [require('./img/github.png'),
            require('./img/slack.png')],
      '2': [require('./img/slack.png')]
  }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={imageMapper[itemID][0] || require('./img/gmail.png')} style ={{height:100, width: 100}}/>
      </View>
    );
  }  
}