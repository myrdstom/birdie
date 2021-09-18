import { call, put, take, actionChannel } from 'redux-saga/effects';
import axios from 'axios';
import { getEventsSuccess, GET_EVENTS, getEventsFailure } from '../actions/types';
import { baseUrl } from '../../config/api';
import { SuccessEventsGenerator, actionInterface } from '../../helpers/globalInterfaces';

export const getEventTypes = async (url: string) => {
    const data = await axios.get(url);
    return data.data;
};

export function* getEventsSaga(payload: string) {
    try {
        const url = `${baseUrl}/mood/${payload}`;
        const eventsData: SuccessEventsGenerator = yield call(getEventTypes, url);
        yield put(getEventsSuccess(eventsData));
    } catch (error) {
        yield put(getEventsFailure(error));
    }
}

export function* getEventWatcher() {
    const subEvent: actionInterface = yield actionChannel(GET_EVENTS);

    while (true) {
        const { payload } = yield take(subEvent as any);
        yield call(getEventsSaga, payload);
    }
}
