import React from 'react';
import CheckboxSimple from '../CheckboxSimple';

import './styles.scss';

interface ICheckboxWithLabel {
  checked: boolean;
  title: string;
  value: string;
  onClick: Function;
};

const CheckboxWithLabel: React.FC<ICheckboxWithLabel> = ({checked, title, value, onClick} : ICheckboxWithLabel) => {
  return <div className="checkbox-with-label" onClick={() => onClick()}>
    <CheckboxSimple checked={checked} value={value} />
    <label className="checkbox-with-label__label">{title}</label>
  </div>;
};

export default CheckboxWithLabel;