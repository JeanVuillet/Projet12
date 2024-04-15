import React from 'react';
import'./ErrorComp.scss';

import { Link } from 'react-router-dom';

// Composant principal qui contient l'ErrorBoundary
export function ErrorComp() {
  return (
    <div className='container'>
      <div className='error'>Error 404</div>
     <div className='message'> Data not found</div>
<Link to='/' className='link'> return to selectPage</Link>

    </div>
  );
}
