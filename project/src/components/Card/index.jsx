import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FaYammer } from 'react-icons/fa6'

// eslint-disable-next-line react/prop-types
function Card({ name, model, type, engine, power, starter, displacement }) {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <div className={styles.info}>
                <p><strong>model:</strong> {model}</p>
                <p><strong>displacement:</strong> {displacement}</p>
                <p><strong>engine:</strong> {engine}</p>
                <p><strong>power:</strong> {power}</p>
                <p><strong>starter:</strong> {starter}</p>
            </div>
            
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    {type}
                </div>
            </div>
        </section>
    )
}

export default Card
