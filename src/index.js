import React from 'react';
import ReactDOM from 'react-dom';
import Lifecyclce from './reactjsdasar/Lifecycle';
// import Map from './reactjsdasar/Map';
// import StateProps from './reactjsdasar/StateProps';
// import App from './reactjsdasar/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud'

ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);
