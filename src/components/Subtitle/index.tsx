import React from 'react';

import './styles.scss';

interface ISubtitle {
  text: string
};

const Subtitle: React.FC<ISubtitle> = ({text} : ISubtitle) => {
  return <div className="subtitle">
    {text}
  </div>;
}

export default Subtitle;