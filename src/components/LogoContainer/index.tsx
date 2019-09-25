import React from 'react';
import LogoImage from '../LogoImage';

import './styles.scss';

const LogoContainer: React.FC = () => {
  return (
    <div className="logo-container">
      <LogoImage />
    </div>
  );
}

export default LogoContainer;