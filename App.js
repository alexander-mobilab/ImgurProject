import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import myReducer from './src/redux/store/reducer';

import AlbumsScreen from './src/screens/Albums/AlbumsScreen';
import ImagesScreen from './src/screens/Images/ImagesScreen';
import UserScreen from './src/screens/User/UserScreen';
//import  rootSaga  from './index';
import { rootSaga } from './src/redux/sagas/index';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(myReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


const AppNavigator = createStackNavigator({

  User: UserScreen,
  Albums: AlbumsScreen,
  Images: ImagesScreen,

}, {
    initialRouteName: 'User',
});


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    );
  }
}
