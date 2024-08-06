import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import imagem from '../../../public/imagem.png'


function Home() {
  return (
    <>

        <section className={styles.home}>
          <div className={styles.apresentacao}>
            <p>
              hello, we are <br />
              <span>pedro </span> and <span> rebeca</span> <br />
              this is <span>our</span> project.
            </p>
            <Link to="/bikes" className={`${styles.btn} ${styles.btn_red}`}>
              know more about bikes
            </Link>
          </div>
          <figure>
            <img className={styles.img_home} src={imagem} alt="Imagem de Home" />
          </figure>
        </section>
      </>
      )
}

export default Home
