import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects'

function* getItems(){
    try{
    //should send axios GET to server to get all items from DB
    console.log('in get Items saga')
    const response = yield axios.get('/api/shelf');
    console.log(response.data);
    //send server response to reducer
    yield put({type: 'SET_SHELF', payload: response.data})
    }catch(error){
        console.log(error)
        alert('error getting items')
    }
}

function* deleteItem(action){
    try{
    //should send axios to DELETE single item from DB
    console.log('in deleteItem saga')
    const response = yield axios.delete(`/api/shelf/delete/${action.payload}`);
    //send server response to reducer
    console.log(response)
    yield put({type: 'GET_SHELF'})
    }catch(error){
        console.log(error)
        alert('error getting items')
    }
}

function* shelfSaga() {
    yield takeEvery('DELETE_ITEM', deleteItem)
    yield takeEvery('GET_SHELF', getItems);
  }

  export default shelfSaga;
