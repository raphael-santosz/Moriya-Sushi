import * as React from "react"

export function ComCriaOpcoes(){
    const[nome, setNome] = React.useState();
    const[preco, setPreco] = React.useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const opcao = {nome, preco};
        fetch("http://localhost:5000/opcaoDePrato", {
            method: 'POST',
            headers: {"Content-Type": "application/json",
                      "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify(opcao)
        }).then(()=>{
            console.log("Opção adicionada.");
        }).catch((e)=>
        console.log(e.message));
    }

    return(
        <div>
            <h1>Criador de cardapio</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <label for="nome">Nome:</label>
                    <input 
                    id="nome"
                    type="text" 
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label for="nome">Preço:</label>
                    <input 
                    id="nome"
                    type="number"
                    step=".01" 
                    required
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    ></input>
                </div>
                <button>Adicionar opção</button>
            </form>
        </div>
    );
}


export default ComCriaOpcoes;