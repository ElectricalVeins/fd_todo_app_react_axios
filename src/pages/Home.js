import { Link } from 'react-router-dom';
import React from 'react';

export default  function Home (props) {
  return (
  <>
    <h1>
      Home
    </h1>
    <Link to='/about'>About</Link>
    <Link to='/contacts'>Contacts</Link>
  </>
  );
}