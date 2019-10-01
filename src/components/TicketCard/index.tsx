import React from 'react';
import { ITicket } from '../../models/contracts/ITicket';
import LightBlock from '../hocs/LightBlock';
import Segments from './Segments';

import './styles.scss';
import TicketCardHeader from './TicketCardHeader';

const TicketCard: React.FC<ITicket> = (props : ITicket) => {
  const {
    price,
    logo_url,
    segments
  } = props;

  return <div className="ticket-card">
    <LightBlock>
      <div className="ticket-card-inner">
        <TicketCardHeader price={price} logo_url={logo_url} />
        <Segments segments={segments} />
      </div>
    </LightBlock>
  </div>;
};

export default TicketCard;