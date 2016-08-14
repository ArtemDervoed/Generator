import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialStore) {
  const store = createStore(rootReducer, initialStore);
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
