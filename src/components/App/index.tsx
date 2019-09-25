import React from 'react';
import HeaderContainer from '../HeaderContainer';
import ContentContainer from '../ContentContainer';

const App: React.FC = () => {
  return (
    <div className="app">
      <HeaderContainer />
      <ContentContainer />
    </div>
  );
}

export default App;
