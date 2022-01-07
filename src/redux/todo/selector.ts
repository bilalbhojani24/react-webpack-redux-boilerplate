import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getTodo = (state: AppState) => state.todo;

export const getTodosSelector = createSelector(getTodo, (todos : any) => todos);
