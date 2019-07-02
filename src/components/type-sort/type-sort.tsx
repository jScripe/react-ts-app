import * as React from 'react';

import './type-sort.scss';

export function TypeSort() {
  return (
    <div className="type-sort">
      <div className="type-sort__label">Sort by</div>

      <input type="radio" name="type-sort" id="type-release" className="type-sort__radio" defaultChecked={true} />
      <label htmlFor="type-release" className="type-sort__button">
        release date
      </label>

      <input type="radio" name="type-sort" id="type-raiting" className="type-sort__radio" />
      <label htmlFor="type-raiting" className="type-sort__button">
        raiting
      </label>
    </div>
  );
}
