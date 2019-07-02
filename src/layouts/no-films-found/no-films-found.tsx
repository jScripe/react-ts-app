import * as React from 'react';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

import './no-films-found.scss';

export class NoFilmsFound extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="no-films-found">
        <Header />
        <div className="no-films-found__content">No films found</div>
        <Footer />
      </div>
    );
  }
}
