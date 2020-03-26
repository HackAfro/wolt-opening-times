export function to12HourTime(timeInSeconds) {
  const hour = getHour(timeInSeconds);
  const minute = getMinute(timeInSeconds);
  const time = hour >= 12 ? 'PM' : 'AM'; // Select time of the day based on the current hour;
  const minuteExt = `${minute > 0 ? `:${minute}` : ''}`; // Display the minutes if it isn't on the hour
  const twelveHour = hour > 12 ? hour - 12 : hour

  return `${twelveHour}${minuteExt} ${time}`;
}

const getHour = timeInSeconds => {
  return Math.floor(timeInSeconds / 3600);
};

const getMinute = timeInSeconds => {
  return Math.floor((timeInSeconds % 3600) / 60);
};

const getSeconds = timeInSeconds => {
  return (timeInSeconds % 3600) % 60;
};

// get the first three letter representing the current day and check if it's in the current day
export const isToday = day => {
  const today = new Date()
    .toString()
    .slice(0, 3)
    .toLowerCase();
  return day.includes(today);
};

export const getOpeningTimes = (day = '', week = {}) => {
  const dayTimes = week[day];

  if (!dayTimes.length) {
    return 'closed';
  }

  const dayKeys = Object.keys(week);

  // Check if the current day has a closing time 
  const hasClosingTime = dayTimes.some(
    (time, index) => time.type === 'close' && index > 0
  );

  let period = dayTimes.reduce((result, value, index) => {
    if (value.type === 'open') {
      if (result) {
        result = `${result}, ${to12HourTime(value.value)}`;
        return result;
      }
      result = `${to12HourTime(value.value)}`;
      return result;
    }

    if (value.type === 'close') {
      if (index > 0) {
        result = `${result} - ${to12HourTime(value.value)}`;
        return result;
      }
    }
  }, '');

  // If the current day doesn't have a closing time, get the first closing time from the next day.
  if (!hasClosingTime) {
    const currentDayIndex = dayKeys.findIndex(dayStr => dayStr === day);
    const nextDayIndex =
      currentDayIndex + 1 > dayKeys.length - 1 ? 0 : currentDayIndex + 1;
    const nextDay = dayKeys[nextDayIndex];
    const nextDayTimes = week[nextDay];
    if (nextDayTimes.length) {
      const closingTime = nextDayTimes[0];
      period = `${period} - ${to12HourTime(closingTime.value)}`;
    }
  }
  return period;
};
