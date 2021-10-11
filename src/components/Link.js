import React from 'react';

const Link = props => {
  const {link, text} = props;
  return (
    <>
    <a
      className="App-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer">
      {text}
    </a>
    <br/>
    </>
  );
}

export default Link;