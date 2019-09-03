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

class HomeScreen extends Component {

  componentDidMount() {
    return this.props.addAlbums();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.props.album.albumList}
          renderItem={({ item }) =>
            <Button title={item.title}
            onPress={() => {
              this.props.clearImages();
              this.props.navigation.navigate('Images', { albumId: item.id });
            }}
            />}
            keyExtractor={(item) => item.id}
          />
          {/*<ShowAlbums albums={this.props.album.albumList} />*/}
      </View>
    );
  }  
}

//function ShowAlbums(props){
//  if (props.albums.length === 0){
//    return <Text>No albums available...</Text>;
//  }
//  else{
//    return (<FlatList data={props.albums}
//      renderItem={({ item }) =>
//        <Button title={item.title}
//        onPress={() => {
//          this.props.clearImages();
//          this.props.navigation.navigate('Images', { albumId: item.id });
//        }}
//        />}
//        keyExtractor={(item) => item.id}
//    />);
//  }
//}

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