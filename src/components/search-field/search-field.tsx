import * as React from 'react';

import './search-field.scss';

export function SearchField() {
  return (
    <div className="search-field">
      <div className="search-field__label">Find your Movie</div>
      <input type="text" className="search-field__field" placeholder="movie search" />
    </div>
  );
}
