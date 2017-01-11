import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx'

const people = observable([{
  id: 0,
  firstName: 'Vin',
  lastName: 'Diesel',
  age: 49,
  facebook: 'VinDiesel',
  get name() {
    const fullName = this.firstName + ' ' + this.lastName;
    console.log(`%c${fullName}: I'm computing my full name!`, "color: blue;");
    return fullName;
  }
}, {
  id: 1,
  firstName: 'Jet',
  lastName: 'Li',
  age: 53,
  facebook: 'JetLi',
  get name() {
    const fullName = this.firstName + ' ' + this.lastName;
    console.log(`%c${fullName}: I'm computing my full name!`, "color: green");
    return fullName;
  }
}])

const style = observable({
  width: 200,
  showAge: true
})

window.people = people;
window.vin = people[0];
window.jet = people[1];
window.style = style;

ReactDOM.render(
  <App people={people} style={style} />,
  document.getElementById('root')
);
