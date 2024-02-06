'use client'
import React from 'react';

import HitCounter from '../components/HitCounter/HitCounter';

function Home() {

  // create state
  const [isCensored, setIsCensored] = React.useState(false);

  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number <HitCounter isCensored={isCensored} setIsCensored={setIsCensored}/>.</p>
    </main>
  );
}

export default Home;
