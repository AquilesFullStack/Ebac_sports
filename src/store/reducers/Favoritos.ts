import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarFavoritos: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload
      if (state.itens.find((p) => p.id == favorito.id)) {
        const favoritoNoProduto = state.itens.filter(
          (p) => p.id !== favorito.id
        )
        state.itens = favoritoNoProduto
      } else {
        state.itens.push(favorito)
      }
    }
  }
})

export const { adicionarFavoritos } = favoritoSlice.actions
export default favoritoSlice.reducer
