import React from 'react';
import { ITicketSegment } from '../../../models/contracts/ITicketSegment';
import SegmentParam from '../SegmentParam';
import { timePeriod } from '../../../helpers/time_period';

import './styles.scss';

const Segment: React.FC<ITicketSegment> = ({date, duration, origin, destination} : ITicketSegment) => {
  return <div className="segment">
    <SegmentParam 
      name={`${origin} - ${destination}`} 
      value={timePeriod(date, duration)} 
    />
    <SegmentParam
      name="В пути"
      value={``}
    />
    <div></div>
  </div>;
};

export default Segment;