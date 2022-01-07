import React from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import { useSelector } from 'react-redux';
import { useGetPostsQuery } from 'services/posts';

const Second : React.FC = () => {
  const params = useParams();
  console.log(params);

  const {
    data, isLoading, error,
  } = useGetPostsQuery('', {});
  const post = useSelector((state) => state);

  console.log(data, isLoading, error);
  console.log(post);

  return <div className="first__view">I am the second page!!</div>;
};

export default Second;
