import { SuccessEventsGenerator } from '../../helpers/globalInterfaces';

export const GET_EVENTS = 'GET_EVENT_TYPES';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';

export const getEvents = () => ({
    type: GET_EVENTS
});

export const getEventsSuccess = (payload: SuccessEventsGenerator) => ({
    type: GET_EVENTS_SUCCESS,
    payload
});
