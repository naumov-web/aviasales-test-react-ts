import React from 'react';
import cn from 'classnames';

import './styles.scss';

interface ISortingSelectorItem {
  name: string;
  value: string;
  selected: boolean;
  isFirst: boolean;
  isLast: boolean;
  onClick: Function;
};

const SortingSelectorItem: React.FC<ISortingSelectorItem> = 
  ({ name, value, selected, isFirst, isLast, onClick } : ISortingSelectorItem) => {
    const classes = cn({
      "sorting-selector-item" : true,
      "sorting-selector-item_selected" : selected,
      "sorting-selector-item_first" : isFirst,
      "sorting-selector-item_last" : isLast
    });

    return <div className={classes} onClick={() => onClick(value)}>
      {name}
    </div>;
};

export default SortingSelectorItem;