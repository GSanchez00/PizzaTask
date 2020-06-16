import { createStore, applyMiddleware } from 'redux';
//import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import { persistStore, persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducers/';
import initialState from './initialState';
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage: localStorage
}

const initStore = (state = initialState) => {
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  //const store = createStore(persistedReducer, applyMiddleware(ReduxThunk), devToolsEnhancer());
  const store = createStore(persistedReducer, 
    composeWithDevTools(applyMiddleware(ReduxThunk)));

  const persistor = persistStore(store)

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers/', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return {store, persistor};
};

export default initStore;
