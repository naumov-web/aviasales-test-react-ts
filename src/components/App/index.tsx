import React from 'react';
import HeaderContainer from '../HeaderContainer';
import ContentContainer from '../ContentContainer';

import './styles.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <HeaderContainer />
      <ContentContainer />
    </div>
  );
}

export default App;
