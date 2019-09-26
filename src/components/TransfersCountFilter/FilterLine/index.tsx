import React from 'react';
import { IHoc } from '../../../models/contracts/IHoc';

import './styles.scss';

const FilterLine: React.FC<IHoc> = ({ children } : IHoc) => {
  return <div className="transfers-count-filter-line">
    {children}
  </div>;
}

export default FilterLine;