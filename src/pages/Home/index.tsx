import { Link } from 'react-router-dom'
import styles from './Home.module.scss'

export default function Home() {

    return(
        <div className={styles.home}>
            <h1 className={styles.home__titulo}>Bem vindo ao Ceretti's Restaurante!</h1>
            <h3 className={styles.home__subtitulo}>Um restaurante de comida italiana de verdade!</h3>
            <button type='submit' className={styles.botao}>
                <Link to="/cardapio" className={styles.botao__texto}>Clique para conferir nosso delicioso cardápio!</Link> 
            </button>
        </div>
    )
}