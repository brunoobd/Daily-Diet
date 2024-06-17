import { DateTime } from "luxon";

export const formatDate = (date: Date | string): string => {
  let newDate: Date;

  if (typeof date === "string") {
    newDate = new Date(date);
    return DateTime.fromJSDate(newDate).toFormat("dd/MM/yyyy");
  }

  return DateTime.fromJSDate(date).toFormat("dd/MM/yyyy");
};

export const formatDateToString = (date: Date | string): string => {
  let newDate: Date;

  if (typeof date === "string") {
    newDate = new Date(date);
    return DateTime.fromJSDate(newDate).toLocaleString(DateTime.DATE_SHORT);
  }

  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_SHORT);
};

export const formatHourToString = (hour: Date): string => {
  let newHour: Date;

  if (typeof hour === "string") {
    newHour = new Date(hour);
    return DateTime.fromJSDate(newHour).toLocaleString(DateTime.TIME_SIMPLE);
  }

  return DateTime.fromJSDate(hour).toLocaleString(DateTime.TIME_SIMPLE);
};
