import * as React from 'react';

import { Logo } from '../logo/logo';

import './film-description.scss';

export function FilmDescription() {
  return (
    <div className="film-description">
      <div className="film-description__alignment">
        <a href="/search" className="film-description__logo">
          <Logo />
        </a>
        <div className="film-description__content">
          <img src="https://via.placeholder.com/300/09f/fff.png" alt="img" className="film-description__image" />
          <div className="film-description__description">
            <div className="film-description__heading">
              <div className="film-description__name">Pulp Fiction</div>
              <div className="film-description__raiting">4.1</div>
            </div>
            <div className="film-description__time-content">
              <div className="film-description__year">1994</div>
              <div className="film-description__duration">124 min</div>
            </div>
            <div className="film-description__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laboriosam possimus qui vero eos magni
              asperiores dolore necessitatibus facere itaque? Aspernatur aliquam eveniet, inventore beatae pariatur
              recusandae rerum quis eos veritatis, magni ducimus expedita ut officiis velit! Quibusdam nesciunt omnis
              repellendus itaque voluptatum? Sequi amet obcaecati perspiciatis iure nisi, minus molestiae officiis
              pariatur deleniti a aperiam ipsa cupiditate ab, maiores asperiores laboriosam recusandae tempora sint
              mollitia earum ut voluptatum natus assumenda. Sint corrupti hic velit, fuga at tempore aut corporis eos
              dolorum quibusdam doloribus iure blanditiis adipisci ab aspernatur nobis a. Officia nesciunt, magni vel
              sunt aspernatur culpa soluta nam?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
