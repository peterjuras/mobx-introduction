import './App.css';

import DevTools from 'mobx-react-devtools';
import PeopleList from './people-list.js';
import React from 'react';

export default function App(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src="https://cdn.shopify.com/s/files/1/1270/4545/products/Triple_X_Logo_grande.png?v=1478123931" className="App-header-logo" role="presentation" />
        <p>Welcome! Open your browser dev tools and start modifiying the "people", "vin", "jet" and "style" objects for MobX awesomeness!</p>
      </div>
      <PeopleList {...props} />
      <DevTools />
    </div>
  );
}

