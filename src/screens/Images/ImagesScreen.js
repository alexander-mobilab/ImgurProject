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
  
  componentDidMount() {
    const { navigation } = this.props;
    const itemID = navigation.getParam('itemID');
    return this.props.addImage(itemID);
  }
  
  render() {
    const { navigation } = this.props;
    const itemID = navigation.getParam('itemID');

    const imageMapper = this.props.album.imageList;
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList data={imageMapper}
          renderItem={({ item }) =>
            <Image source={item}
              style={{ height: 100, width: 100 }}
            />}
            keyExtractor={(item, index) => index.toString()}
        />
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