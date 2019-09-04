import React, { Component } from 'react';
import {
    Button,
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAlbums } from '../../redux/store/addAlbums';
import { clearAlbums } from '../../redux/store/clearAlbums';
import { setUser } from '../../redux/store/setUser';
import { setDefaultUser } from '../../redux/store/setDefaultUser';
import styles from './styles';

class UserScreen extends Component {

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text>Whose albums would you like to see?</Text>
                    <TextInput
                        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
                        onSubmitEditing={text => {
                            console.log('onsubmit: '+typeof(text));
                            this.props.setDefaultUser();
                            this.props.clearAlbums();
                            this.props.addAlbums();
                            this.props.navigation.navigate('Albums');
                        }} />
                    <Button title='Submit'
                        onPress={() => {
                            this.props.setDefaultUser();
                            this.props.clearAlbums();
                            this.props.addAlbums();
                            this.props.navigation.navigate('Albums');
                        }} />
                    <Text>Or go see my albums:</Text>
                    <Button title='Go to alexmobi'
                        onPress={() => {
                            this.props.setDefaultUser();
                            this.props.clearAlbums();
                            this.props.addAlbums();
                            this.props.navigation.navigate('Albums');
                        }}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = (state) => {
    const { album } = state;
    return { album };
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addAlbums,
        clearAlbums,
        setUser,
        setDefaultUser
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);