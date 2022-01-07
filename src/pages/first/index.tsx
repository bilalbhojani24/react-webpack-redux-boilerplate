/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {

  getTodosSelector,
} from 'redux/todo/selector';

import { fetchTodoRequest } from 'redux/todo/action';

import './style.scss';

const First: React.FC = () => {
  const dispatch = useDispatch();

  const todosRedux = useSelector(getTodosSelector);
  const { pending, error, todos } = todosRedux;

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, [dispatch]);

  return (
    <>
      <div className="first__view">I am the first page!!</div>
      <div style={{ padding: '15px' }}>
        {pending ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          todos.map((todo : any, index : any) => (
            <div style={{ marginBottom: '10px' }} key={todo.id}>
              {index + 1}
              .
              {todo.title}
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default First;
