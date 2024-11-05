import { FormEvent } from "react";

export default function CadastroProduto(){
    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar produtos")
    }
    return(
        <>
            <h1>Tela Cadastro Produtos</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="id">Id</label>
                    <input type="text" name="id"/>
                </div>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome"/>
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <input type="text" name="descricao"/>
                </div>
                <div>
                    <label htmlFor="preco">Preço</label>
                    <input type="text" name="preco"/>
                </div>
                <div>
                    <label htmlFor="imagem">Imagem</label>
                    <input type="text" name="imagem"/>
                </div>
                <input type="submit" value="Cadastrar" />
            </form>
        </>
    )
}