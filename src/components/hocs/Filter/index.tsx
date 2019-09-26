import React from 'react';
import { IFilter } from '../../../models/contracts/IFilter';
import Subtitle from '../../Subtitle';

interface IFilterComponent extends IFilter {
  children: React.ReactNode
};

const Filter: React.FC<IFilterComponent> = ({ children, name} : IFilterComponent) => {
  return <div className="filter">
    <Subtitle text={name} />
    {children}
  </div>;
}

export default Filter;