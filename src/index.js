import React from 'react';
import ReactDOM from 'react-dom';

import Main from './container';
import './style.css';

const App = () => {
  return (
    <div>
      <h1> Hello, World! Edited </h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
