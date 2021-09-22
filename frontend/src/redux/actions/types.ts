import { SuccessEventsGenerator } from '../../helpers/globalInterfaces';

export const GET_EVENTS = 'GET_EVENT_TYPES';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAILURE = 'GET_EVENTS_FAILURE';

export const getEvents = (id: string) => ({
    type: GET_EVENTS,
    payload: id
});

export const getEventsSuccess = (payload: SuccessEventsGenerator) => ({
    type: GET_EVENTS_SUCCESS,
    payload
});

export const getEventsFailure = (payload: any) => ({
    type: GET_EVENTS_FAILURE,
    payload
});
