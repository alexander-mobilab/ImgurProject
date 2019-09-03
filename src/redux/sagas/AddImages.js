import { takeLatest, put } from 'redux-saga/effects';


//function* fetchImages(albumId) {
//    let albumImages = [];
//      try {
//        const response = yield fetch('https://api.imgur.com/3/album/'+albumId, {
//        method: 'GET',  
//        headers: {
//          'Authorization': 'Client-ID 77248e7a549713b'},
//        });
//        const imageJson = yield response.json();
//
//        albumImages = imageJson.data.images;
//
//      } catch (error) {
//        console.error(error);
//        return [];
//      }
//      return albumImages;
//}
//
//function* addImagesAsync(action) {
//    const imgList = yield fetchImages(action.albumId);
//    if (imgList.length > 0){
//        yield imgList.forEach( (item) => {
//        put({type: 'ADD_IMAGE_ASYNC', img: item.link});
//      })}
//      else {
//        yield put({type: 'ADD_IMAGE_ASYNC', img: 'https://www.freeiconspng.com/img/23490'});
//      };
//}
//
//export function* watchAddImages(){
//    yield takeLatest('ADD_IMAGE', addImagesAsync);
//}



function* fetchImages(albumId) {
    let albumImages = [];
      try {
        const response = yield fetch('https://api.imgur.com/3/album/'+albumId, {
        method: 'GET',  
        headers: {
          'Authorization': 'Client-ID 77248e7a549713b'},
        });
        const imageJson = yield response.json();

        imageJson.data.images.forEach( (item, index) => {
          albumImages[index] = item.link;
        });

      } catch (error) {
        console.error(error);
        return [];
      }
      return albumImages;
}

function* addImagesAsync(action) {
    const img = yield fetchImages(action.albumId);
    yield put({type: 'ADD_IMAGE_ASYNC', img});
}

export function* watchAddImages(){
    yield takeLatest('ADD_IMAGE', addImagesAsync);
}