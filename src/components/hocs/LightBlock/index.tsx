import React from 'react';
import { IHoc } from '../../../models/contracts/IHoc';

import './styles.scss';

const LightBlock: React.FC<IHoc> = ({ children } : IHoc) => {
  return <div className="light-block">
    {children}
  </div>;
}

export default LightBlock;