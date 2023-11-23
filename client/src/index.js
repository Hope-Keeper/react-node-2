import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import {BrowserRouter} from 'react-router-dom'


//thats why

ReactDOM.render(
<BrowserRouter>
 <App /> 
  </BrowserRouter>
  ,document.getElementById('root'));

