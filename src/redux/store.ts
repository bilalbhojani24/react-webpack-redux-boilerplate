import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from './combineReducer';

export const configureStore = () : any => {
  const middleWares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middleWares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: any = compose(...enhancers);

  const store = createStore(combineReducer, composedEnhancers);

  return store;
};
