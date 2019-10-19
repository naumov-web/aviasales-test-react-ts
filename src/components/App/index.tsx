import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import HeaderContainer from '../HeaderContainer';
import ContentContainer from '../ContentContainer';
import reducers from './../../state';

import './styles.scss';

const store = createStore(reducers, applyMiddleware(thunk));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <HeaderContainer />
        <ContentContainer />
      </div>
    </Provider>
  );
}

export default App;
