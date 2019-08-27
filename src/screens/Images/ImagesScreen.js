import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  FlatList
} from 'react-native';


export default class ImagesScreen extends Component {
  
  
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
      {/*const res = new Promise()*/}
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
      return bildURL;
    }

    {/*async function bla() {
      let abc = await getImage();
      console.log(abc);
    }
  bla();*/}

    let bild = getImage();
    setTimeout(function(){console.log(bild);}, 5000);
    console.log(bild);

    {/*let promise1 = new Promise(function(resolve, reject) {
      setTimeout(resolve, 500, 'one');
    });


  Promise.race([getImage(), promise1]).then( function(value){
    console.log(value);
  });*/}

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
        <Image source={{uri: ''}} />
      </View>
    );
  }
}