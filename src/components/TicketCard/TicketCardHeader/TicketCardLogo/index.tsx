import React from 'react';

import './styles.scss';

interface ITicketCardLogo {
  logo_url: string;
};

const TicketCardLogo: React.FC<ITicketCardLogo> = ({ logo_url } : ITicketCardLogo) => {
  return <div className="ticket-card-logo"><img src={logo_url} alt="" /></div>;
};

export default TicketCardLogo;