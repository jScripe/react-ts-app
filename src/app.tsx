import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { store, persistor } from './store';

import { MainPage } from './layouts/main-page/main-page';
import { FilmPage } from './layouts/film-page/film-page';
import { NoFilmsFound } from './layouts/no-films-found/no-films-found';

import './base-style/base.scss';

const history: any = createBrowserHistory();

export function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/search" component={MainPage} exact />
            <Route path="/film" component={FilmPage} exact />
            <Route component={NoFilmsFound} exact />
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  );
}
