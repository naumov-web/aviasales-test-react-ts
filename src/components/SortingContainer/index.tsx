import React from 'react';
import SortingSelector from '../SortingSelector';
import { sorting } from '../../config/handbooks';

const SortingContainer: React.FC = () => {
  return (
    <div className="sorting-container">
      <SortingSelector selectors={sorting.selectors} />
    </div>
  );
}

export default SortingContainer;