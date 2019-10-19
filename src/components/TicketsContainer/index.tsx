import React from 'react';
import TicketCard from '../TicketCard';

import './styles.scss';
import { ITicket } from '../../models/contracts/ITicket';

interface ITicketsContainer {
  tickets : Array<ITicket>;
};

const TicketsContainer: React.FC<ITicketsContainer> = ({ tickets } : ITicketsContainer) => {
  const itemsJSX = tickets.map((item, index) => {
    return <TicketCard key={`ticket-card-${index}`} {...item} />
  });
  return <div className="tickets-container">
    {itemsJSX}
  </div>;
};

export default TicketsContainer;