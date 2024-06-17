export const convertDateAndHourToDate = (date: Date, hour: Date) => {
  const newDate = date;

  newDate.setHours(hour.getHours());
  newDate.setMinutes(hour.getMinutes());
  newDate.setSeconds(hour.getSeconds());
  newDate.setMilliseconds(hour.getMilliseconds());

  return newDate;
};
