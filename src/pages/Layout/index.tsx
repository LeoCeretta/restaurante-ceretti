import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from 'assets/logo.svg'

import styles from './Layout.module.scss'

export default function Layout() {
    return(
        <>
        <nav className={styles.navbar}>
            <Logo />            
            <ul className={styles.navbar__lista}>
                <li>
                    <Link to="/" className={styles.navbar__item}>Home</Link>
                </li>
                <li>
                    <Link to="/cardapio" className={styles.navbar__item}>Cardapio</Link>
                </li>
                <li>
                    <Link to="/about" className={styles.navbar__item}>Sobre</Link>
                </li>
                <li>
                    <Link to="/contato" className={styles.navbar__item}>Contato</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        <footer className={styles.footer}>
            <Logo />
            <p>Desenvolvido por Leonardo D. Ceretta <span>&copy; 2023</span></p>
        </footer>
        </>
    )
}