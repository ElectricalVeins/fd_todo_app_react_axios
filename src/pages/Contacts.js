import { Link } from 'react-router-dom';
import React from 'react';

export default function Contacts (props) {
  return (
  <>
    <h1>
      Contacts
    </h1>
    <Link to='/'>Home</Link>
    <Link to='/contacts'>Contacts</Link>
  </>
  );
}