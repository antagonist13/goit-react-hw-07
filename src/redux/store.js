import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from './contactsSlice'
import filterReducer from './filtersSlice'

const persistedContactReducer = persistReducer(
  {
    key: 'ContactValue',
    storage,
    whitelist: ['items'],
  },
  contactReducer
);
const persistedFilterReducer = persistReducer(
  {
    key: 'FilterValue',
    storage,
    whitelist: ['name'],
  },
  filterReducer
);

    export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filters: persistedFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    });

export const persistor = persistStore(store);