import { Link } from 'react-router-dom'
import styles from './Header.module.css'


function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>beca&peter api motorcycle</span>
            </Link>
            <nav>
                <Link to="/">home page</Link>
                <Link to="/sobre">about</Link>
                <Link to="/bikes">know the stuff</Link>
                <Link to="/contatos">contact</Link>
            </nav>
        </header>
    )   

}

export default Header