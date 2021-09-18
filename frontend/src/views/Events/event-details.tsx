import React, { FC } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import pieChart from '../../helpers/pieChart';
import { eventsData } from '../../helpers/globalInterfaces';

interface eventProps {
    events: eventsData[] | [];
}

const EventDetails: FC<eventProps> = ({ events }) => {
    const renameEventKeys = (arr: eventsData[]) => {
        return arr.map(item => {
            return { name: item.event_type, y: item.count };
        });
    };
    return (
        <div className="pie-chart">
            <HighchartsReact highcharts={Highcharts} options={pieChart(renameEventKeys(events) as any)} />
        </div>
    );
};

export default EventDetails;
