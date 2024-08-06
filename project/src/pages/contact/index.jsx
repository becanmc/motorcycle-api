import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import styles from '../contact/Contatos.module.css'

function Contatos() {
    return (
        <>
                <section className={styles.contatos}>
                    <h2>contacts</h2>

                    <h3>contact rebeca!</h3>

                    <div className={styles.icones}>

                        <a href='mailto:22201653@aluno.cotemig.com.br' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone} />
                        </a>

                        <a href='https://www.instagram.com/becanmc/' target='_blank' rel='noopener noreferrer'>
                            <BsInstagram className={styles.icone} />
                        </a>
                        <a href='https://github.com/becanmc'>
                            <BsGithub className={styles.icone} />
                        </a>
                    </div>

                    <h3>contact pedro!</h3>

                    <div className={styles.icones}>

                        <a href='mailto:22201220@aluno.cotemig.com.br' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone} />
                        </a>

                        <a href='https://www.instagram.com/pedro7og/' target='_blank' rel='noopener noreferrer'>
                            <BsInstagram className={styles.icone} />
                        </a>
                        <a href='https://github.com/pedroog2070'>
                            <BsGithub className={styles.icone} />
                        </a>
                    </div>

                </section>
        </>
    )
}

export default Contatos