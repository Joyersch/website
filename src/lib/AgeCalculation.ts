import moment from "moment";

export function getYears(date: string) {
  const now = moment();
  const than = moment(date);
  const y = now.diff(than, 'years', false);
  const m = now.diff(than, 'months', false) - (y * 12);
  return y;
}

export function getMonths(date: string) {
  const now = moment();
  const than = moment(date);
  const y = now.diff(than, 'years', false);
  const m = now.diff(than, 'months', false) - (y * 12);
  return m;
}