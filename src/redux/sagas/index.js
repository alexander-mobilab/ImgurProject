
import { all }  from 'redux-saga/effects';

import { watchAddAlbum } from './AddAlbum';
import { watchAddImages } from './AddImages';


export function* rootSaga() {
    yield all([
        watchAddAlbum(),
        watchAddImages()
    ]);
};