import React from 'react';

import { combineReducers } from 'redux';


const initialState = {
  user: 'alexmobi',
  albumList: [],
  imageList: ''
}

const myReducer = (state = initialState, action) => {
  const newState = {...state};

  if(action.type === 'ADD_ALBUM'){
    newState.albumList = state.albumList.concat(album);
  }
  if(action.type === 'ADD_IMAGE'){
    newState.imageList = action.imag;
    console.log('test'+action.imag);
  }
  if(action.type === 'CLEAR_IMAGES'){
    newState.imageList = [];
    console.log('klappt');
  }
  return newState;
}

export default combineReducers({
  album: myReducer,
});