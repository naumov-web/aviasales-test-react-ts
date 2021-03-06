import React from 'react';
import Filter from '../hocs/Filter';
import { filters } from '../../config/handbooks';
import TransfersCountFilter from '../TransfersCountFilter';
import { ITransfersCount } from '../../config/contracts/ITransfersCount';

const FiltersContainer: React.FC = () => {

  const transfers_count: ITransfersCount = filters.transfers_count;

  return <div className="filters-container">
    <Filter name={transfers_count.name}>
      <TransfersCountFilter />
    </Filter>
  </div>;
}

export default FiltersContainer;