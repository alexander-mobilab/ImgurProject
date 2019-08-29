import React, {Component } from 'react';
import {
  Button,
  View,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearImages } from '../../redux/store/clearImages';
import { addImage } from '../../redux/store/addImage';
import { addAlbums } from '../../redux/store/addAlbums';

class HomeScreen extends Component {

  componentDidMount() {
    return this.props.addAlbums();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList data={this.props.album.albumList}
          renderItem={({ item }) =>
            <Button title={item.title}
            onPress={() => {
              this.props.clearImages();
              this.props.navigation.navigate('Images', { itemID: item.ID });
            }}
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
    clearImages,
    addImage,
    addAlbums
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);