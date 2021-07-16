import React from 'react';
import {Router} from '@reach/router';
import Color from './components/Color';
import Page from './components/Page';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/home'/>
        <Page path='/:word'/>
        <Color path='/:word/:color1/:color2' />
      </Router>
    </div>
  );
}

export default App;

//npx create-react-app reactjs-app --scripts-version 1.1.5
//npx create-react-app@3.4.1 my-app