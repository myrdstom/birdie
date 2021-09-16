import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { getEventsSuccess, GET_EVENTS } from '../actions/types';
import { baseUrl } from '../../config/api';
import { SuccessEventsGenerator } from '../../helpers/globalInterfaces';

const getEventTypes = async (url: string) => {
    const data = await axios.get(url);
    return data.data;
};

function* getEventsSaga() {
    try {
        const url = `${baseUrl}/hello`;
        const eventsData: SuccessEventsGenerator = yield call(getEventTypes, url);
        yield put(getEventsSuccess(eventsData));
    } catch (error) {
        console.warn(e, 'the error');
    }
}

export function* getEventWatcher() {
    yield takeLatest(GET_EVENTS as any, getEventsSaga);
}
