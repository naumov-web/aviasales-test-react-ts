import React from 'react';
import { ITicketSegment } from '../../../models/contracts/ITicketSegment';
import SegmentParam from '../SegmentParam';
import { timePeriod, humanizeDuration } from '../../../helpers/time_period';
import { numberWords } from '../../../helpers/number_format';

import './styles.scss';

const Segment: React.FC<ITicketSegment> = ({date, duration, origin, destination, stops} : ITicketSegment) => {
  let stops_title = 'Без пересадок';

  if (stops.length > 0) {
    stops_title = stops.length + ' ' + numberWords(
      stops.length,
      ['пересадка', 'пересадки', 'пересадок']
    );
  }

  return <div className="segment">
    <SegmentParam 
      name={`${origin} - ${destination}`} 
      value={timePeriod(date, duration)} 
    />
    <SegmentParam
      name="В пути"
      value={humanizeDuration(duration)}
    />
    <SegmentParam
      name={stops_title}
      value={stops.join(', ')}
    />
  </div>;
};

export default Segment;