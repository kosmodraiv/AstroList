// Core
import { combineReducers } from 'redux';
import taskCardReducer from '../taskCard/taskCardReducer';
// Reducers


export const rootReducer = combineReducers({
    taskCard: taskCardReducer
});
