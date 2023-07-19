import * as React from "react"

 
export function ComPegaMenu(){
    React.useEffect(()=> {
        funcaoAssync();
      }, [])
      
    const [opcoes, setOpcoes] = React.useState([]);
    const funcaoAssync = async() => {
        const resultado = await fetch("http://localhost:5000/opcaoDePrato");
        const json = await resultado.json();
        setOpcoes(json);
    };
    return(
        <div className="content">
            <h1>Eu carreguei!</h1>
            {opcoes.map((op)=> { return (
                <div className="menuDeOp">
                    <input hidden={true} value={op._id}></input>
                    <ul>
                        <li className="lista">
                            <strong className="forte">{op.nome}</strong>
                            <div className="preco">
                                <strong>R$:</strong><label className="numero_preco">{op.preco.toFixed(2)}</label>
                            </div>
                            <input type="number"></input>
                       </li>
                    </ul>
                </div>
            )})}
        </div>
    );
};

export default ComPegaMenu;