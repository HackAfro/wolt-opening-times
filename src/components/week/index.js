import React from 'react';
import { weekToArray } from './utils';
import Day from '../day';

const Week = ({ week }) => {
  const days = weekToArray(week);

  return (
    <div>
      <ul>
        {days.map(day => (
          <Day day={day} key={day.day} week={week} />
        ))}
      </ul>
    </div>
  );
};

export default Week;
