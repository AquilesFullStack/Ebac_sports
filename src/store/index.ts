import { configureStore } from '@reduxjs/toolkit'

import Carrinhoreducer from './reducers/Carrinho'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: Carrinhoreducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
