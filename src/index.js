import {
  createStore,
  applyMiddleware,
} from 'redux';

const logger = store => next => action => {
  console.log('b4 reducer', store.getState());
  next(action);
  console.log('after reducer', store.getState());
};

function reducer(state = {}, action) {
  switch(action.type) {
    case 'HI':
      return 'hey';
    default: 
      return state;
  }
}

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

store.dispatch({
  type: 'HI'
});
