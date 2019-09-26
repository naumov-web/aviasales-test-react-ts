import React from 'react';
import FiltersContainer from '../../FiltersContainer';
import LightBlock from '../../hocs/LightBlock';

const LeftColContainer: React.FC = () => {
  return <div className="left-col-container">
    <LightBlock>
      <FiltersContainer></FiltersContainer>
    </LightBlock>
  </div>;
}

export default LeftColContainer;