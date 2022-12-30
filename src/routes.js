// Fazendo as importações da routas criadas como Home e Sobre
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Fazendo a importações do nossos componentes 
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

import Header from './components/Header';

import Produto from './pages/Produto';

import Error from './pages/Error';



function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/produto/:id" element={<Produto />} />


                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}


export default RoutesApp;