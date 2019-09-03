import { combineReducers } from 'redux';


const initialState = {
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

    //newState.imageList.push({uri: action.img});

    action.img.forEach( (item) => {
      newState.imageList.push({uri: item});
    });
  }
  if(action.type === 'CLEAR_IMAGES'){
    newState.imageList = [];
  }
  return newState;
}

//const myReducer = (state = initialState, action) => {
//  switch( action.type){
//    case 'ADD_ALBUMS_ASYNC': {
//      return {
//        ...state,
//        albumList: action.albums,
//      };
//    }
//    case 'CLEAR_ALBUMS': {
//      return {
//        ...state,
//        albumList: [],
//      };
//    }
//    case 'ADD_IMAGE_ASYNC': {
//      return {
//        ...state,
//        imageList: imageList.concat(action.img),
//      };
//    }
//    case 'CLEAR_IMAGES': {
//      return {
//        ...state,
//        imageList: [],
//      };
//    }
//    default: {
//      return state;
//    }
//  }
//}


export default combineReducers({
  album: myReducer,
});