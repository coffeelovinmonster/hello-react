import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Component() {
  return (
    <div className="myDiv">
      <p>Hello Mike</p>
    </div>
  );
}

root.render(
  <Component />
);