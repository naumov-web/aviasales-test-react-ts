import moment from 'moment';

const duration_units = 'seconds';
const format = 'H:m';

export const timePeriod = (datetime : string, duration : number) : string => {
  const moment_from = moment(datetime);
  const moment_to = moment(datetime);

  moment_to.add(duration, duration_units);

  return moment_from.format(format) + ' - ' + moment_to.format(format);
};