import React from 'react';
import { isToday, getOpeningTimes } from './utils';

const Day = ({ day, week }) => {
  const hasBadge = isToday(day.day);
  const openingTimes = getOpeningTimes(day.day, week);
  const textColor = `${
    openingTimes === 'closed' ? 'text-gray-500' : 'text-gray-700'
  }`;

  return (
    <div className='border-b border-gray-300 py-3 flex justify-between'>
      <h3 className='text-xl text-gray-800 font-semibold capitalize'>
        {day.day}
        {hasBadge && (
          <span className='text-green-400 font-medium text-xs ml-2'>TODAY</span>
        )}
      </h3>

      <h4 className={`${textColor} font-medium text-base capitalize`}>
        {openingTimes}
      </h4>
    </div>
  );
};

export default Day;
