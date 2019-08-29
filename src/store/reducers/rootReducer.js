import { combineReducers } from 'redux';
import graphReducer from './graphReducer';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({
  graph: graphReducer,
  project: projectReducer
})

export default rootReducer;
