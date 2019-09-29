import React from 'react';
import { ITicket } from '../../models/contracts/ITicket';
import LightBlock from '../hocs/LightBlock';

import './styles.scss';

const TicketCard: React.FC<ITicket> = () => {
  return <div className="ticket-card">
    <LightBlock>
      <div className="ticket-card-inner">

      </div>
    </LightBlock>
  </div>;
};

export default TicketCard;