import React from 'react';

import './styles.scss';

interface ITicketCardHeader {
  price: number;
  logo_url: string;
};

const TicketCardHeader: React.FC<ITicketCardHeader> = ({ price, logo_url} : ITicketCardHeader) => {
  return null;
};

export default TicketCardHeader;