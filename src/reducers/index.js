import { combineReducers } from 'redux';
import characters from './charactersReducer';
import characterDetail from './characterDetailReducer';

export default combineReducers({
  characters,
  characterDetail
});
