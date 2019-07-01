import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { store, persistor } from './store';
import { MainPage } from './layouts/main-page/main-page';

import './base-style/reset.scss';
import './base-style/base.scss';

const history: any = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Route path="/" component={MainPage} exact />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById('app')
);
