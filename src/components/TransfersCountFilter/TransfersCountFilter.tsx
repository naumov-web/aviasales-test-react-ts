import React from 'react';
import { IHandbookItem } from '../../config/contracts/IHandbookItem';
import HoverLineBlock from '../hocs/HoverLineBlock';
import FilterLine from './FilterLine';
import CheckboxWithLabel from '../ui/CheckboxWithLabel';

import './styles.scss';

const TransfersCountFilter: React.FC = ({ items, filters, onCheckboxClick } : any) => {
  return <div className="transfers-count-filter">
    {items.map((item : IHandbookItem, index : Number) => {
      return <HoverLineBlock key={`filter-hover-line-${index}`}>
        <FilterLine key={`filter-line-${index}`}>
          <CheckboxWithLabel 
            checked={filters.indexOf(item.id) !== -1} 
            title={item.name}
            value={item.id.toString()}
            onClick={() => onCheckboxClick(item.id)}
          />
        </FilterLine>
      </HoverLineBlock>;
    })}
  </div>;
}

export default TransfersCountFilter;