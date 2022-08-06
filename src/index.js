import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import {Coordinate} from './components/Coordinate';
//import { Coordinate } from './components/Coordinate';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Coordinate />
  </React.StrictMode>
);


