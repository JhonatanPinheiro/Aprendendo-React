import { Link } from "react-router-dom";

function Contato() {
    return (
        <div>
            <h1>Página de Contato</h1>
            <span>Contato da Empresa (DD) xxxxx-xxxxxx</span><br/><br/>

        <Link to={"/"}>Página Home</Link>
        <br/><br/>
        <Link to={"sobre"}>Sobre</Link>
        <br/><br/>
        
        </div>

    )
}

export default Contato;