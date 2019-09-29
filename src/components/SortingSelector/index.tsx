import React from 'react';
import { IHandbookSelectorItem } from '../../config/contracts/IHandbookSelectorItem';
import SortingSelectorItem from './SortingSelectorItem';

import './styles.scss';

interface ISortingSelector {
  selectors: Array<IHandbookSelectorItem>;
};

const SortingSelector: React.FC<ISortingSelector> = ({ selectors } : ISortingSelector) => {
  const itemsJSX = selectors.map((item, index) => {
    return <SortingSelectorItem {...item} 
              selected={index === 0}
              isFirst={index === 0}
              isLast={index === selectors.length - 1} 
            />;
  });

  return (
    <div className="sorting-selector">
      {itemsJSX}
    </div>
  );
}

export default SortingSelector;