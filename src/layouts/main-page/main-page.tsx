import * as React from 'react';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Films } from '../../components/films/films';

import './main-page.scss';

export class MainPage extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="main-page">
        <Header />
        <Breadcrumbs />
        <Films />
        <Footer />
      </div>
    );
  }
}
