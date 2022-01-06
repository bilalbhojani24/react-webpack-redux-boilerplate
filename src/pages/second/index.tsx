import React from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';

const Second = () => {
  const params = useParams();
  return <div className="first__view">I am the second page!!</div>;
};

export default Second;
