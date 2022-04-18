import React from 'react';
import './Cards.css';

import CardComponent from './CardComponent.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className='cards'>
      {cities.map(c => <CardComponent
          id={c.id}
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
}
