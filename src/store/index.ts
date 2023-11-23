import { configureStore } from '@reduxjs/toolkit'
import Carrinhoreducer from './reducers/Carrinho'
import FavoritoReducer from './reducers/Favoritos'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    carrinho: Carrinhoreducer,
    favorito: FavoritoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
