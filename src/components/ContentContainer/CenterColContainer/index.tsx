import React from 'react';
import SortingContainer from '../../SortingContainer';
import TicketsContainer from '../../TicketsContainer';

import './styles.scss';

const CenterColContainer: React.FC = () => {
  return <div className="center-col-container">
    <SortingContainer />
    <TicketsContainer />
  </div>;
}

export default CenterColContainer;