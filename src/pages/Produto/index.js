import { useParams } from "react-router-dom";

function Produto() {

    const { id } = useParams();

    return (
        <div>
            <h2>Página Detalhe do produto</h2> <br /><br />

            <span>
                Meu Produto é {id}<br /><br />
            </span>
        </div>
    )
}

export default Produto; 