import React from 'react';

const Language = props => (
  <li className="language media group">
    <img className="language-img" src={props.img} />
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  </li>
);

export default Language;
