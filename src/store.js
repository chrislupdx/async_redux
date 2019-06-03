import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducer from './reducers';
import { promiseMiddleware } from 'promise-middleware-redux';

export default createStore(
  reducer,
  compose(
    applyMiddleware(promiseMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
