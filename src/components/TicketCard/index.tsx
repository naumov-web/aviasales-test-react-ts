import React from 'react';
import { ITicket } from '../../models/contracts/ITicket';
import LightBlock from '../hocs/LightBlock';
import Segments from './Segments';

import carrierLogo from '../../helpers/carrier_image';

import './styles.scss';
import TicketCardHeader from './TicketCardHeader';

const TicketCard: React.FC<ITicket> = (props : ITicket) => {
  const {
    price,
    carrier,
    segments
  } = props;

  return <div className="ticket-card">
    <LightBlock>
      <div className="ticket-card-inner">
        <TicketCardHeader price={price} logo_url={carrierLogo(carrier)} />
        <Segments segments={segments} />
      </div>
    </LightBlock>
  </div>;
};

export default TicketCard;