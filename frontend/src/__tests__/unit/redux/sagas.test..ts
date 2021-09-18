import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { getEventsSaga, getEventTypes } from '../../../redux/sagas/eventTypeSaga';
import { getEventsSuccess } from '../../../redux/actions/types';
import { baseUrl } from '../../../config/api';
import { data } from '../../__mocks__/axiosData';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('testing the Event type Saga', () => {
    it('triggers a success action and returns events', async () => {
        const test = 'test';
        const url = `${baseUrl}/mood/${test}`;

        const genObject = getEventsSaga(test);
        expect(genObject.next().value).toEqual(call(getEventTypes, url));
        expect(genObject.next(data).value).toEqual(put(getEventsSuccess(data)));
    });

    it('fetches data from axios call', async () => {
        const url = `${baseUrl}/mood/${test}`;

        mockedAxios.get.mockReturnValueOnce({ data });
        const result = await getEventTypes(url);

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result).toEqual(data);
    });
});
