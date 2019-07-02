import * as React from 'react';

import { TypeSort } from '../type-sort/type-sort';

import './breadcrumbs.scss';

export function Breadcrumbs() {
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__content">
        <div className="breadcrumbs__films-found">7 movies found</div>
        <TypeSort />
      </div>
    </div>
  );
}
