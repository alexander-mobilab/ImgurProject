import { combineReducers } from 'redux';


const initialState = {
  user: 'alexmobi',
  albumList: [],
  imageList: []
}

const myReducer = (state = initialState, action) => {
  switch( action.type){

    case 'SET_USER': {
      return {
        ...state,
        user: action.user
      }
    }
    case 'SET_DEFAULT_USER': {
      return {
        ...state,
        user: 'alexmobi'
      }
    }

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