import { FormEvent, useState, ChangeEvent } from "react";

export default function CadastroProduto() {
    const [id, setId] = useState("");
    const [descricao, setDescricao] = useState("");
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [imagem, setImagem] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    function handleForm(event: FormEvent) {
        event.preventDefault();

        // Simple validation
        if (!id || !descricao || !nome || !preco || !imagem) {
            setError("Todos os campos são obrigatórios.");
            return;
        }

        const produto = { id, descricao, nome, preco, imagem };

        // Send data to the backend
        fetch("YOUR_BACKEND_URL/produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(produto),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao cadastrar produto");
            }
            return response.json();
        })
        .then(data => {
            console.log("Produto cadastrado com sucesso:", data);
            setSuccess("Produto cadastrado com sucesso!");
            setError("");
            // Reset form fields
            setId("");
            setDescricao("");
            setNome("");
            setPreco("");
            setImagem("");
        })
        .catch(err => {
            console.error(err);
            setError(err.message);
            setSuccess("");
        });
    }

    function handleId(event: ChangeEvent<HTMLInputElement>) {
        setId(event.target.value);
    }
    function handleDescricao(event: ChangeEvent<HTMLInputElement>) {
        setDescricao(event.target.value);
    }
    function handlePreco(event: ChangeEvent<HTMLInputElement>) {
        setPreco(event.target.value);
    }
    function handleNome(event: ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value);
    }
    function handleImagem(event: ChangeEvent<HTMLInputElement>) {
        setImagem(event.target.value);
    }

    return (
        <>
            <h1>Tela Cadastro Produtos</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="id">ID</label>
                    <input type="text" name="id" value={id} onChange={handleId} />
                </div>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" value={nome} onChange={handleNome} />
                </div>
                <div>
                    <label htmlFor="descricao">Descrição</label>
                    <input type="text" name="descricao" value={descricao} onChange={handleDescricao} />
                </div>
                <div>
                    <label htmlFor="preco">Preço</label>
                    <input type="text" name="preco" value={preco} onChange={handlePreco} />
                </div>
                <div>
                    <label htmlFor="imagem">Imagem</label>
                    <input type="text" name="imagem" value={imagem} onChange={handleImagem} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </form>
        </>
    );
}