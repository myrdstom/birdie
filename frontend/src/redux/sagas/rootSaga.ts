import { all } from 'redux-saga/effects';
import { getEventWatcher } from './eventTypeSaga';

export function* rootSaga() {
    yield all([getEventWatcher()]);
}
