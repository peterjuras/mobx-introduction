import './person.css';

import Avatar from 'react-avatar';
import React from 'react';
import { getColor } from './color';
import { observer } from 'mobx-react'

export default observer(function Person({ person, style }) {
  console.log(`%cI'm rendering person: ${person.name}`, `color: ${getColor(person.id)}`);
  const age = style.showAge ? <p>{person.age}</p> : null;
  return (
  <div className="person-container" style={Object.assign({}, style)}>
      <Avatar size={style.width} facebookId={person.facebook} />
      <div className="person-text">
        <p>{person.name}</p>
        {age}
      </div>
    </div>
  );
})
