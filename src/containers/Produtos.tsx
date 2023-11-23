import { Produto as ProdutoType } from '../App'
import { useGetProdutosQuery } from '../services/api'
import { Produtos } from '../containers/styles'

import * as S from './styles'

export type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutoComponente = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando . . . </h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produtos key={produto.id} />
        ))}
      </S.Produtos>
    </>
  )
}
export default ProdutoComponente

// const ProdutosComponent = ({
//   produtos,
//   favoritos,
//   adicionarAoCarrinho,
//   favoritar
// }: Props) => {
//   const produtoEstaNosFavoritos = (produto: ProdutoType) => {
//     const produtoId = produto.id
//     const IdsDosFavoritos = favoritos.map((f) => f.id)

//     return IdsDosFavoritos.includes(produtoId)
//   }
