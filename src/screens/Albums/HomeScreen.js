import React, {Component } from 'react';
import {
  Button,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearImages } from '../../redux/store/clearImages';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Wich album would you like to see?</Text>
        <Button
          title={this.props.album.user}
          onPress={() => {
            this.props.clearImages();
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

const mapStateToProps = (state) => {
  const { album } = state;
  return { album };
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    clearImages,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);