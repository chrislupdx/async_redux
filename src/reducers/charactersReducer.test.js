import reducer from './charactersReducer';
import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS_ERROR
} from '../actions/charactersActions';

describe('characters reducer', () => {
  it('handles the fetch characters action', () => {
    const initialState = {
      loading: true,
      list: [],
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS,
      payload: ['hi']
    });

    expect(newState).toEqual({
      loading: false,
      list: ['hi'],
      error: null
    });
  });


  it('handles the fetch characters loading action', () => {
    const initialState = {
      loading: false,
      list: [],
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS_LOADING
    });

    expect(newState).toEqual({
      loading: true,
      list: [],
      error: null
    });
  });

  it('handles the fetch characters error action', () => {
    const initialState = {
      loading: true,
      list: [],
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS_ERROR,
      payload: 'my error'
    });

    expect(newState).toEqual({
      loading: false,
      list: [],
      error: 'my error'
    });
  });
});
