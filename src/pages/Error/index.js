import { Link } from "react-router-dom"; 

function Error(){
    return(
        <div>

            <h2>Págona de Error</h2>
            <span>Encontramos essas páginas aqui: </span> <br/>
            <Link to="/">Home</Link><br/>
            <Link to="/sobre">Sobre</Link><br/>
            <Link to="/contato">Contato</Link><br/>       
                                                                
        </div>


    )
}


export default Error; 