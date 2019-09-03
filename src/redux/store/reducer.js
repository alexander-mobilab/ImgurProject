import { combineReducers } from 'redux';


const initialState = {
  user: 'alexmobi',
  albumList: [],
  imageList: []
}

const myReducer = (state = initialState, action) => {
  const newState = {...state};

  if(action.type === 'ADD_ALBUMS_ASYNC'){
    newState.albumList = action.albums;
  }
  if(action.type === 'CLEAR_ALBUMS'){
    newState.albumList = [];
  }

  if(action.type === 'ADD_IMAGE_ASYNC'){
    for(i=0; i<=action.img.length; i++){
      newState.imageList[i] = {uri: action.img[i]};
    }
  }
  if(action.type === 'CLEAR_IMAGES'){
    newState.imageList = [];
  }
  return newState;
}

export default combineReducers({
  album: myReducer,
});