import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/homepage/index'
import Sobre from './pages/about/index'
import Projetos from './pages/api/index'
import Contatos from './pages/contact/index'
import Page404 from './pages/pagenotfound/index'
import PaginaBase from './pages/basepage'
import Bikes from './pages/bikes'

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={ <PaginaBase /> }>
                <Route index element={ <Home /> }></Route>
                <Route path="/sobre" element={ <Sobre /> }></Route>
                <Route path="/projetos" element={ <Projetos /> }></Route>
                <Route path="/contatos" element={ <Contatos /> }></Route>
                <Route path="/bikes" element={ <Bikes /> }></Route>
                <Route path="*" element={ <Page404 /> }></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes