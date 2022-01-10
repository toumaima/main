import {takeLatest, all, put, fork, call } from "redux-saga/effects"
import * as types from  "./actionTypes"
import { getRecipe } from "./api"
import {AxiosResponse} from "axios"

export function * onLoadRecipeAsAsync({query}:ReturnType<any>){
    try{
        console.log("query", query);
    const response:AxiosResponse<any>  = yield call(getRecipe, query);
    console.log("res",response);
    yield put ({type: types.FETCH_RECIPIE_SUCCESS, payload:response.data});
    }
    catch(error){
    yield put ({type:types.FETCH_RECIPIE_FAIL, payload:error});
    }

}

export function *onLoadRecipe (){
yield takeLatest(types.FETCH_RECIPIE_START, onLoadRecipeAsAsync);
}

const recipeSaga= [fork( onLoadRecipe)];

export default function* rootSaga(){yield all([...recipeSaga])};