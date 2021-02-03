import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects'

function* deleteItem(action){
    try{
    //should send axios to DELETE single item from DB
    console.log('in deleteItem saga')
    yield axios.delte(`/api/shelf/${action.payload}`);
    //send server response to reducer
    yield put({type: 'GET_SHELF'})
    }catch(error){
        console.log(error)
        alert('error getting items')
    }
}
