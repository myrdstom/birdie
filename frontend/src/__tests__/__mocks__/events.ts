export const eventsPayload = {
    events: [
        {
            event_type: 'task_completed',
            count: 6
        },
        {
            event_type: 'fluid_intake_observation',
            count: 4
        }
    ]
};

export const responseError = { response: { data: { data: { message: 'invalid' } } } };

export const reducerSuccessEvent = {
    error: null,
    events: [
        { count: 6, event_type: 'task_completed' },
        { count: 4, event_type: 'fluid_intake_observation' }
    ],
    loading: false
};

export const reducerFailureEvent = {
    error: { data: { message: 'invalid' } },
    events: null,
    loading: false
};
