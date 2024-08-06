import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import Container from '../../components/Container/index'
import { Outlet } from 'react-router-dom'

function PaginaBase() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    )
}

export default PaginaBase
