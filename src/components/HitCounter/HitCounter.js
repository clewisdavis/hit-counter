'use client';
import React from 'react';

import {
  readFile,
  writeFile,
} from '../../helpers/file-helpers';

function HitCounter({isCensored, setIsCensored}) {

  let { hits } = JSON.parse(readFile(DATABASE_PATH));

  hits += 1;

  writeFile(DATABASE_PATH, JSON.stringify({ hits }));    

  return (
    <button 
      className={isCensored ? 'censored' : undefined} 
      onClick={() => { setIsCensored(!isCensored)}}>
        {hits}
    </button>
  );
}

export default HitCounter;
