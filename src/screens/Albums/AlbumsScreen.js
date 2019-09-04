import React, {Component } from 'react';
import {
  Button,
  View,
  FlatList,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearImages } from '../../redux/store/clearImages';
import { addImage } from '../../redux/store/addImage';
import { addAlbums } from '../../redux/store/addAlbums';
import styles from './styles';

class AlbumsScreen extends Component {

  //componentDidMount() {
  //  return this.props.addAlbums();
  //}

  render() {
    return (
      <View style={styles.container}>
          <ShowAlbums superprops={this.props}/>
      </View>
    );
  }  
}

function ShowAlbums(props){
  const albumList = props.superprops.album.albumList;
  if (albumList.length === 0){
    return <Text>No albums available...</Text>;
  }
  else { 
    return <FlatList data={albumList}
      renderItem={({ item }) =>
        <Button title={item.title}
        onPress={() => {
          props.superprops.clearImages();
          props.superprops.navigation.navigate('Images', { albumId: item.id });
        }}
        />}
        keyExtractor={(item) => item.id}
    />;
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsScreen);