import Person from './person';
import React from 'react';
import { observer } from 'mobx-react'

export default observer(function PeopleList({ people, style }) {
  const content = people.map(person => (
    <Person
      key={person.id}
      style={style}
      person={person}
    />
  ));
  console.log("I'm rendering the PeopleList");
  return (
    <div>
      {content}
    </div>
  );
}
)
