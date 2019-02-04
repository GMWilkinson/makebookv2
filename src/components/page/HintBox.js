import React from 'react';
import { hintRandomizer } from '../../lib/randomHint';

function HintBox() {
  return (

    <article>
      <div className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">{hintRandomizer()}</p>
          </div>
        </div>
      </div>
    </article>

  );
}

export default HintBox;
