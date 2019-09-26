import React from 'react';
import classnames from 'classnames';
import checker from '../../../static/images/checkbox-checker.svg';

import './styles.scss';

interface ICheckbox {
  checked: boolean;
  value: string;
};

const CheckboxSimple: React.FC<ICheckbox> = ({ checked, value} : ICheckbox) => {
  const cn = classnames({
    "checkbox-simple": true,
    "checkbox-simple_checked": checked
  });
  return <div className={cn}>
    {checked && <img src={checker} className="checkbox-simple__checker" alt="" />}
  </div>;
};

export default CheckboxSimple;