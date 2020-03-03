import { Link } from 'react-router-dom';
import React from 'react';

export default function About (props) {
  return (
  <>
    <h1>
      About
    </h1>
    <Link to='/'>Home</Link>
    <Link to='/contacts'>Contacts</Link>
  </>
  );
}