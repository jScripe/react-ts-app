import * as React from 'react';

import { Logo } from '../logo/logo';
import { SearchField } from '../search-field/search-field';
import { TypeSearch } from '../type-search/type-search';
import { Button } from '../button/button';

import './header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__content">
          <SearchField />
          <div className="header__controls">
            <TypeSearch />
            <Button />
          </div>
        </div>
      </div>
    </header>
  );
}
