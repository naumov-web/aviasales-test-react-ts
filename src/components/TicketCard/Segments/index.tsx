import React from 'react';
import Segment from '../Segment';
import { ITicketSegment } from '../../../models/contracts/ITicketSegment';

import './styles.scss';

interface ISegments {
  segments: Array<ITicketSegment>;
};

const Segments: React.FC<ISegments> = ({ segments } : ISegments) => {
  return <div className="segments">
    {segments.map((item) => {
      return <Segment {...item} />
    })}
  </div>;
};

export default Segments;