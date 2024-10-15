import { useEffect, useState } from 'react'
import './App.css'

type ProdutoType = {
  id:number,
  nome:string,
  descricao:string,
  preco:string,
  imagem:string
}
function App() {
  const [produtos,setProdutos] = useState<ProdutoType[]>([])

  useEffect(()=>{
    fetch("https://one022b-marketplace-m.onrender.com/produtos")
    .then(resposta=>resposta.json())
    .then(dados=>setProdutos(dados))
  },[])
  return (
    <>
    <div className="container-produtos">
      {produtos.map(prod=>{
        return(
          <div key={prod.id} className="produto-item">
            <h1>{prod.nome}</h1>
            <p>{prod.descricao}</p>
            <p>{prod.preco}</p>
            <img src={prod.imagem} alt="Imagem de Celular" />
          </div>
        )
      })}
      </div>
    </>
  )
}

export default App