import styles from './Sobre.module.css'
import avatar from './images/user.png'
import html from './images/html5.png'
import css from './images/css3-alt.png'
import js from './images/js.png'
import node from './images/node-js.png'
import sql from './images/mysql.png'

function Sobre() {
    return(
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar}/>
                <div className={styles.textos}>
                    <h2>about</h2>

                    <p>we are <span>Rebeca Costa</span> and <span> Pedro Pinto </span> <br />
                    <strong>full stacks devs</strong> </p>

                    <p>we work with web development since 2023.</p>

                    <p>we are in love by motorcycles and we decided to make this project basing in this love.</p>

                    <p>this project is made for sharing the knowladge that we have in bikes to the world.</p>

                </div>
            </div>


            <div className={styles.techs}>
                <h3>techs used in this project</h3>
                <div className={styles.icones}>
                    <div><img src={html} alt="Icone do html" /><p>html</p></div>
                    <div><img src={css} alt="Icone do css" /><p>css</p></div>
                    <div><img src={js} alt="Icone do js" /><p>javascript</p></div>
                    <div><img src={node} alt="Icone do node" /><p>node</p></div>
                </div>
            </div>

            
        </section>
    )
}

export default Sobre