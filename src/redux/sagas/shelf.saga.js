import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';


function* postShelf(action){
    try{
        console.log(action);
        yield axios.post('/api/shelf', action.payload);
        yield put({type: 'GET_SHELF'});
    } catch(err) {
        console.error(err);
        alert('error posting items');
    }
}

function* getItems(){
    try{
        //should send axios GET to server to get all items from DB
        console.log('in get Items saga')
        const response = yield axios.get('/api/shelf');
        console.log(response.data);
        //send server response to reducer
        yield put({type: 'SET_SHELF', payload: response.data});
    }catch(error){
        console.log(error)
        alert('error getting items')
    }
}

function* deleteItem(action){
    try{
    //should send axios to DELETE single item from DB
    console.log('in deleteItem saga');
    yield axios.delete(`/api/shelf/delete/${action.payload}`);
    yield put({type: 'GET_SHELF'});
    }catch(error){
        console.log(error);
        alert('error deleting items');
    }
}

function* shelfSaga() {
    yield takeEvery('GET_SHELF', getItems);
    yield takeEvery('DELETE_ITEM', deleteItem);
    yield takeEvery('POST_SHELF', postShelf);
}

export default shelfSaga;