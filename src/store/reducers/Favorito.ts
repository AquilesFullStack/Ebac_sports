import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'
import { Produto } from '../../components/Produto/styles'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice ({
  name: 'favorito',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((favorito) => favorito.id === produto.id)){
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionar } = favoritoSlice.actions
export default favoritoSlice.reducer
