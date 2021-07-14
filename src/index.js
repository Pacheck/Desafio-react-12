import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './container/styles';
import App from './container/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

