import React from 'react';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/umd/popper.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import{Rotas} from './pages/rotas'
import {MenuIndex} from './pages/menu'

function App() {
  return (
    <div>
      <MenuIndex/>
      <Rotas/>
    </div>
  );
}
export default App;
