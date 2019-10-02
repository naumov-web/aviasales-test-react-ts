import moment from 'moment';
import humanize from 'humanize-duration';
import config from '../config/humanize_duration';

const MS_MULTIPLEXER = 1000;
const duration_units = 'seconds';
const format = 'H:m';

export const timePeriod = (datetime : string, duration : number) : string => {
  const moment_from = moment(datetime);
  const moment_to = moment(datetime);

  moment_to.add(duration, duration_units);

  return moment_from.format(format) + ' - ' + moment_to.format(format);
};

export const humanizeDuration = (duration : number) : string => {
  const shortRusHumanizer = humanize.humanizer(
    config.humanizerConfig
  );

  return shortRusHumanizer(
    duration * MS_MULTIPLEXER, 
    { units: ["d", "h", "m"], round: true}
  );
}