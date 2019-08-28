import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addImage } from '../../redux/store/addImage';


class ImagesScreen extends Component {
  
  
  render() {
    const { navigation } = this.props;
    const itemID = navigation.getParam('itemID');

    const imageMapper = {
      '1': [{ img: require('./img/github.png') },
      { img: require('./img/slack.png') }],
      '2': [{ img: require('./img/mobilab_signature.gif') }]
    }

    const getImage = async() => {
      let bildURL = '';
      try {
        const response = await fetch('https://api.imgur.com/3/image/2awGRrX.json', {
        method: 'GET',  
        headers: {
          'Authorization': 'Client-ID 77248e7a549713b'},
        });
        const imageJson = await response.json();

        bildURL = imageJson.data.link;
      } catch (error) {
        console.error(error);
      }
      this.props.addImage(bildURL);
      return bildURL;
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <FlatList data={imageMapper[itemID]}
          renderItem={({ item }) =>
            <Image source={item.img}
              style={{ height: 100, width: 100 }}
            />}
            keyExtractor={(item, index) => index.toString()}
        />
        <Image source={{uri: `${this.props.imageList}`}} />
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  const { album } = state;
  return { album };
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addImage,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ImagesScreen);