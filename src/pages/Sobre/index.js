import {Link} from "react-router-dom";


function Sobre(){

    return(
        <div>
            <h1>Página Sobre</h1>
            <br/>
            <br/>

            <Link to={"/"}>Página Home</Link>
            <br/><br/>
            <Link to={"/contato"}>Contato</Link>

        </div>
    );
}

export default Sobre;