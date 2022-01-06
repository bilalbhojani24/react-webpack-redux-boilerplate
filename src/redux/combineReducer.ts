import { combineReducers } from 'redux';
import getUserReducer from './reducers/data';

export default combineReducers<any>({
  data: getUserReducer,
});
