import { configureStore } from '@redux/toolkit'

import adicionandoReducer from './reducers/Favorito'

const store = configureStore({
  reducer: {
    adiciona: adicionandoReducer
  }
})
