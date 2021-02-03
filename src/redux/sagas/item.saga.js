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

function* itemSaga() {
    yield takeEvery('GET_SHELF', getItems);
  }

  export default itemSaga;
