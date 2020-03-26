export const weekToArray = (weekObject = {}) => {
  return Object.keys(weekObject).map(day => ({ day, hours: weekObject[day] }));
};
