import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import { useGetProdutosQuery } from '../services/api'
import { RootReducer } from '../store'
import Produto from '../components/Produto'

import * as S from './styles'

const ProdutoComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootReducer) => state.favorito.itens)
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const favoritosId = favoritos.map((f) => f.id)

    return favoritosId.includes(produtoId)
  }
  if (isLoading) return <h2>Carregando . . . </h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}
export default ProdutoComponent
