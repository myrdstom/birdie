import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../redux/actions/types';
import Event from './event';

interface stateProps {
    eventType: {
        events: [
            {
                event_type: string;
            }
        ];
        loading: boolean;
    };
}

const EventView = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state: stateProps) => state.eventType);

    useEffect(() => {
        dispatch(getEvents());
    }, []);

    console.warn(loading, 'the loading');

    return (
        <div>
            <Event />
        </div>
    );
};

export default EventView;
