import React from 'react';
import SortingContainer from '../../SortingContainer';
import TicketsContainer from '../../TicketsContainer';

import './styles.scss';

const CenterColContainer: React.FC = ({ tickets } : any) => {
  return <div className="center-col-container">
    <SortingContainer />
    <TicketsContainer tickets={tickets} />
  </div>;
}

export default CenterColContainer;