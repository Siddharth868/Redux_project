import {takeEvery,put,delay} from 'redux-saga/effects'

function* incAsync(){
    yield delay(4000)
    yield put({type: "inc"})
}

export function* watchINC(){
    yield takeEvery("inc-saga",incAsync)
}