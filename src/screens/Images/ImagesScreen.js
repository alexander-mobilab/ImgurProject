import React, { Component } from 'react';
import {
  View,
  Image,
  FlatList,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addImage } from '../../redux/store/addImage';
import styles from './styles';


class ImagesScreen extends Component {

  componentDidMount() {
    const { navigation } = this.props;
    const albumId = navigation.getParam('albumId');
    return this.props.addImage(albumId);
  }

  render() {
    const imageMapper = this.props.album.imageList;
    return (
      <View style={styles.container}>
        <ShowList album={imageMapper} />
      </View>
    );
  }
}

function ShowList(props) {
  if (props.album.length === 0) {
    return <Text>Loading images...</Text>;
  }
  else {
    return <FlatList data={props.album}
      renderItem={({ item }) =>
        <Image source={{uri: item.link}}
          style={{ height: 100, width: 100 }}
        />}
      keyExtractor={(item, index) => index.toString()} // item solves 'same key' issue. why?
    />;
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