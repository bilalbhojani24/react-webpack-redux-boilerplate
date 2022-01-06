import React from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import { useGetPostsQuery, useDeletePostMutation } from '../../rtkQuery/services/posts';

const Second = () => {
  const params = useParams();
  const post = useGetPostsQuery('name', { pollingInterval: 10000 });
  console.log(post);
  return <div className="first__view">I am the second page!!</div>;
};

export default Second;
