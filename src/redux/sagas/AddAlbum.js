import { takeLatest, put} from 'redux-saga/effects';


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
        return [];
      }
      return albums;
}

function* addAlbumAsync() {
    const albums = yield fetchAlbumsID();
    yield put({type: 'ADD_ALBUMS_ASYNC', albums});
}

export function* watchAddAlbum(){
    yield takeLatest('ADD_ALBUMS', addAlbumAsync);
}