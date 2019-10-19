import React from 'react';
import { IHandbookItem } from '../../config/contracts/IHandbookItem';
import HoverLineBlock from '../hocs/HoverLineBlock';
import FilterLine from './FilterLine';
import CheckboxWithLabel from '../ui/CheckboxWithLabel';

import './styles.scss';

interface ITransfersCountFilter {
  items: Array<IHandbookItem>;
};

const TransfersCountFilter: React.FC<ITransfersCountFilter> = ({ items } : ITransfersCountFilter) => {
  return <div className="transfers-count-filter">
    {items.map((item, index) => {
      return <HoverLineBlock key={`filter-hover-line-${index}`}>
        <FilterLine key={`filter-line-${index}`}>
          <CheckboxWithLabel 
            checked={false} 
            title={item.name}
            value={item.id.toString()}
          />
        </FilterLine>
      </HoverLineBlock>;
    })}
  </div>;
}

export default TransfersCountFilter;