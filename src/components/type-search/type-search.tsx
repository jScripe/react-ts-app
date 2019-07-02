import * as React from 'react';

import './type-search.scss';

export function TypeSearch() {
  return (
    <div className="type-search">
      <div className="type-search__label">Search by</div>

      <input type="radio" name="type-search" id="type-title" className="type-search__radio" defaultChecked={true} />
      <label htmlFor="type-title" className="type-search__button">
        Title
      </label>

      <input type="radio" name="type-search" id="type-genre" className="type-search__radio" />
      <label htmlFor="type-genre" className="type-search__button">
        Genre
      </label>
    </div>
  );
}
