import * as React from 'react';

import { Footer } from '../../components/footer/footer';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { Films } from '../../components/films/films';
import { FilmDescription } from '../../components/film-description/film-description';

import './film-page.scss';

export class FilmPage extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="film-page">
        <FilmDescription />
        <Breadcrumbs />
        <Films />
        <Footer />
      </div>
    );
  }
}
