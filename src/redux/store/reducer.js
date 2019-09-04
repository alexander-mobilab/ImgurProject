import { combineReducers } from 'redux';


const initialState = {
  albumList: [],
  imageList: []
}

const myReducer = (state = initialState, action) => {
  switch( action.type){
    case 'ADD_ALBUMS_ASYNC': {
      return {
        ...state,
        albumList: action.albums,
      };
    }
    case 'CLEAR_ALBUMS': {
      return {
        ...state,
        albumList: [],
      };
    }
    case 'ADD_IMAGE_ASYNC': {
      return {
        ...state,
        imageList: action.img,
      };
    }
    case 'CLEAR_IMAGES': {
      return {
        ...state,
        imageList: [],
      };
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  album: myReducer,
});