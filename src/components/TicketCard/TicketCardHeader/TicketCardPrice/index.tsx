import React from 'react';
import { priceFormat } from '../../../../helpers/number_format';

import './styles.scss';

interface ITicketCardPrice {
  price: number;
};

const TicketCardPrice: React.FC<ITicketCardPrice> = ({ price } : ITicketCardPrice) => {
  return <div className="ticket-card-price">
    {priceFormat(price)} р
  </div>;
};

export default TicketCardPrice;