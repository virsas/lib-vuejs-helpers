import { date } from "quasar";

export function VssStringToDate (str) {
  return date.formatDate(str, "YYYY/MM/DD");
}

export function VssStringToDatetime (str) {
  return date.formatDate(str, "YYYY/MM/DD HH:mm");
}

export function VssStringToTime (str) {
  return date.formatDate(str, "HH:mm");
}

export function VssStringToTimestamp (str) {
  return date.formatDate(str, "X");
}

export function VssCurrentYear () {
  const timeStamp = Date.now();
  return date.formatDate(timeStamp, "YYYY");
}