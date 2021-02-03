import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';


function* postShelf(action){
    try{
        console.log(action);
        yield axios.post('/api/shelf', action.payload)
        yield put({type: 'GET_SHELF'})
        } catch(err) {
        console.error(err);
          }
      }

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

function* shelfSaga() {
    yield takeEvery('GET_SHELF', getItems);
  yield takeEvery('POST_SHELF', postShelf);
  }

  export default shelfSaga;

