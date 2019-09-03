import { takeLatest, put, all } from 'redux-saga/effects';



function* fetchAlbumsID() {
    let albums = [];
      try {
        const response = yield fetch('https://api.imgur.com/3/account/alexmobi/albums.json', {
        method: 'GET',  
        headers: {
          'Authorization': 'Client-ID 77248e7a549713b'},
        });
        const imageJson = yield response.json();

        imageJson.data.forEach( (item, index) => {
          albums[index] = {id: item.id, title: item.title};
        });

      } catch (error) {
        console.error(error);
      }
      return albums;
}

function* addAlbumAsync() {
    const albums = yield fetchAlbumsID();
    yield put({type: 'ADD_ALBUMS_ASYNC', albums});
}

function* watchAddAlbum(){
    yield takeLatest('ADD_ALBUMS', addAlbumAsync);
}



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
      }
      return albumImages;
}

function* addImagesAsync(action) {
    const img = yield fetchImages(action.albumId);
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