import { createAction } from 'promise-middleware-redux';
import { getCharacters } from '../services/avatarApi';

export const [
  fetchCharacters,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
  _,
  FETCH_CHARACTERS_ERROR
] = createAction('FETCH_CHARACTERS', getCharacters);
