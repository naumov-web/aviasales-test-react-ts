import React from 'react';

import './styles.scss';
import TicketCardPrice from './TicketCardPrice';
import TicketCardLogo from './TicketCardLogo';

interface ITicketCardHeader {
  price: number;
  logo_url: string;
};

const TicketCardHeader: React.FC<ITicketCardHeader> = ({ price, logo_url} : ITicketCardHeader) => {
  return <div className="ticket-card-header">
    <TicketCardPrice price={price} />
    <TicketCardLogo logo_url={logo_url} />
  </div>;
};

export default TicketCardHeader;