import React from 'react';
import { IHandbookSelectorItem } from '../../config/contracts/IHandbookSelectorItem';
import SortingSelectorItem from './SortingSelectorItem';

import './styles.scss';

const SortingSelector: React.FC = ({ selectors, sort, onClick } : any) => {
  const itemsJSX = selectors.map((item : IHandbookSelectorItem, index : Number) => {
    return <SortingSelectorItem {...item} 
              selected={item.value === sort}
              isFirst={index === 0}
              isLast={index === selectors.length - 1} 
              key={`sorting-selector-item-${index}`}
              onClick={onClick}
            />;
  });

  return (
    <div className="sorting-selector">
      {itemsJSX}
    </div>
  );
}

export default SortingSelector;