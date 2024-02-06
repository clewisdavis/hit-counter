'use client'
import React from 'react';

// Utility component that allows to Censor generic content
function Censored({ children }) {

  // create state
  const [isCensored, setIsCensored] = React.useState(false);  

    return (
      <button 
        className={isCensored ? 'censored' : undefined} 
        onClick={() => { setIsCensored(!isCensored)}}>
          {children}
      </button>
  );
}

export default Censored;
