import React from 'react';
import TicketCard from '../TicketCard';
import { tickets } from '../../config/tickets';

import './styles.scss';

const TicketsContainer: React.FC = () => {
  const itemsJSX = tickets.map((item) => {
    return <TicketCard {...item} />
  });
  return <div className="tickets-container">
    {itemsJSX}
  </div>;
};

export default TicketsContainer;