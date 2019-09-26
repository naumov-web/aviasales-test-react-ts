import React from 'react';
import { IHoc } from '../../../models/contracts/IHoc';

import './styles.scss';

const HoverLineBlock: React.FC<IHoc> = ({ children } : IHoc) => {
  return <div className="hover-line-block">
    {children}
  </div>;
}

export default HoverLineBlock;