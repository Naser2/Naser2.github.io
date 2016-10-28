import React from 'react';

const Featured = props => {
  let topic = props.params.topic;
  let subject = props.params.subject;

  return (
    <div className="main-content">
      <h2>{subject}</h2>
      <p>Introducing to <strong>{subject}</strong>, a great skill that will strenghen your assets in <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;
