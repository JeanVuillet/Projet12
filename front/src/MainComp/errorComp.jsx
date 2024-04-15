import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// Composant enfant qui lance une erreur
function ChildComponent() {
  throw new Error('Une erreur s\'est produite dans ChildComponent');
}
// Composant principal qui contient l'ErrorBoundary
export function ErrorComp() {
  return (
    <div>
     
      <ErrorBoundary fallback={<p>boundary working</p>} onReset={() => console.log('Erreur réinitialisée')}>
        <ChildComponent />
      </ErrorBoundary>
    </div>
  );
}
