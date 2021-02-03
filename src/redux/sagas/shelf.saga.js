import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function*postShelf(action){
    try{
        console.log(action);
        yield axios.post('/api/shelf', action.payload)
        yield put({type: 'GET SHELF MASTER', payload: response.data})




        
    } catch(err) {
        console.error(err);
}
}

function*shelfSaga(){
    yield takeEvery('POST_SHELF', postShelf)
}


export default shelfSaga;