//import delay from 'redux-saga';
import { takeLatest, put, delay, all } from 'redux-saga/effects';


function* fetchAlbumsID() {
    let albums = [];
      try {
        const response = yield fetch('https://api.imgur.com/3/account/alexmobi/albums.json', {
        method: 'GET',  
        headers: {
          'Authorization': 'Client-ID 77248e7a549713b'},
        });
        const imageJson = yield response.json();
        for(i=0; i<imageJson.data.length; i++){
            albums[i] = {ID: imageJson.data[i].id, title: imageJson.data[i].title};
        }

      } catch (error) {
        console.error(error);
      }
      console.log(albums);
      return albums;
}

function* addAlbumAsync() {
    const albums = yield fetchAlbumsID();
    yield put({type: 'ADD_ALBUMS_ASYNC', albums});
}

function* watchAddAlbum(){
    yield takeLatest('ADD_ALBUMS', addAlbumAsync);
}



function* fetchImages(ID) {
    let albumImages = [];
      try {
        const response = yield fetch('https://api.imgur.com/3/album/'+ID, {
        method: 'GET',  
        headers: {
          'Authorization': 'Client-ID 77248e7a549713b'},
        });
        const imageJson = yield response.json();
        for(i=0; i<imageJson.data.images.length; i++) {
            albumImages[i] = imageJson.data.images[i].link;
        }
      } catch (error) {
        console.error(error);
      }
      return albumImages;
}

function* addImagesAsync(action) {
    const img = yield fetchImages(action.ID);
    yield put({type: 'ADD_IMAGE_ASYNC', img});
}

function* watchAddImage(){
    yield takeLatest('ADD_IMAGE', addImagesAsync);
}



export function* rootSaga() {
    yield all([
        watchAddAlbum(),
        watchAddImage()
    ])
}