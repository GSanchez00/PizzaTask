import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './reducers/';
import initialState from './initialState';

const initStore = (state = initialState) => {
  const store = createStore(rootReducer, devToolsEnhancer());

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers/', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};

export default initStore;
