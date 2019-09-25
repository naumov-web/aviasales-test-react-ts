import React from 'react';
import LeftColContainer from './LeftColContainer';
import CenterColContainer from './CenterColContainer';

const ContentContainer: React.FC = () => {
  return <div className="content-container">
    <LeftColContainer />
    <CenterColContainer />
  </div>;
}

export default ContentContainer;