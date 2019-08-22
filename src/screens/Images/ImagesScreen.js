import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  FlatList
} from 'react-native';
{/*import { TouchableHighlight } from 'react-native-gesture-handler';*/ }

export default class ImagesScreen extends Component {
  render() {
    const { navigation } = this.props;
    const itemID = navigation.getParam('itemID');

    const imageMapper = {
      '1': [{ img: require('./img/github.png') },
      { img: require('./img/slack.png') }],
      '2': [{ img: require('./img/mobilab_signature.gif') }]
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        {/*<Image source={imageMapper[itemID][0].img || require('./img/gmail.png')}
            style={{ height: 100, width: 100 }}
      />*/}

        <FlatList data={imageMapper[itemID]}
          renderItem={({ item }) =>
            <Image source={item.img}
              style={{ height: 100, width: 100 }}
            />}
            keyExtractor={(item, index) => index.toString()}
          
        />

      </View>
    );
  }
}