import * as React from 'react';

import './film.scss';

export function Film() {
  return (
    <div className="film">
      <img className="film__image" src="https://via.placeholder.com/300/09f/fff.png" />
      <div className="film__alignment">
        <div className="film__name">Name film</div>
        <div className="film__year">2012</div>
      </div>
      <div className="film__genre">Drama huyama</div>
    </div>
  );
}
