import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import myReducer from './src/redux/store/reducer';

import HomeScreen from './src/screens/Albums/HomeScreen';
import ImagesScreen from './src/screens/Images/ImagesScreen';
import { rootSaga } from './src/redux/sagas/saga';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(myReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


const AppNavigator = createStackNavigator({

  Home: HomeScreen,
  Images: ImagesScreen,

}, {
    initialRouteName: 'Home',
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
