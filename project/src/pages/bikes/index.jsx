import { useEffect, useState } from 'react'
import styles from './Bikes.module.css'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'



function Bikes() {

    function createURL(make){
        return `https://api.api-ninjas.com/v1/motorcycles?make=${make}`;
    }

    return (
        <section className={styles.section}>
                 <div>
                    <p>Honda</p>
                    <p className={styles.link}>
                        <Link to={"/projetos"} state={{url: 'honda'}} className={styles.btngo}>
                            <BsArrowRight />
                        </Link>
                    </p>
                </div>
                <div>
                    <p>Yamaha</p>
                    <p className={styles.link}>
                        <Link to={"/projetos"} state={{url: 'yamaha'}} className={styles.btngo}>
                            <BsArrowRight />
                        </Link>
                    </p>
                </div>
                <div>
                    <p>Kawasaki</p>
                    <p className={styles.link}>
                        <Link to={"/projetos"} state={{url: 'kawasaki'}} className={styles.btngo}>
                            <BsArrowRight />
                        </Link>
                    </p>
                </div>
                <div>
                    <p>Suzuki</p>
                    <p className={styles.link}>
                        <Link to={"/projetos"} state={{url: 'suzuki'}} className={styles.btngo}>
                            <BsArrowRight />
                        </Link>
                    </p>
                </div>
                <div>
                    <p>Ducati</p>
                    <p className={styles.link}>
                        <Link to={"/projetos"} state={{url: 'ducati'}} className={styles.btngo}>
                            <BsArrowRight />
                        </Link>
                    </p>
                </div>
                <div>
                    <p>BMW</p>
                    <p className={styles.link}>
                        <Link to={"/projetos"} state={{url: 'bmw'}} className={styles.btngo}>
                            <BsArrowRight />
                        </Link>
                    </p>
                </div>
                <div>
                    <p>Harley-Davidson</p>
                    <p className={styles.link}>
                        <Link to={"/projetos"} state={{url: 'harley-davidson'}} className={styles.btngo}>
                            <BsArrowRight />
                        </Link>
                    </p>
                </div>
                <div>
                    <p>Indian</p>
                    <p className={styles.link}>
                        <Link to={"/projetos"} state={{url: 'indian'}} className={styles.btngo}>
                            <BsArrowRight />
                        </Link>
                    </p>
                </div>
                <div>
                    <p>Triumph</p>
                    <p className={styles.link}>
                        <Link to={"/projetos"} state={{url: 'triumph'}} className={styles.btngo}>
                            <BsArrowRight />
                        </Link>
                    </p>
                </div>
                <div>
                    <p>Aprilia</p>
                    <p className={styles.link}>
                        <Link to={"/projetos"} state={{url: 'aprilia'}} className={styles.btngo}>
                            <BsArrowRight />
                        </Link>
                    </p>
                </div>
                <div>
                    <p>KTM</p>
                    <p className={styles.link}>
                        <Link to={"/projetos"} state={{url: 'ktm'}} className={styles.btngo}>
                            <BsArrowRight />
                        </Link>
                    </p>
                </div>
                <div>
                    <p>Benelli</p>
                    <p className={styles.link}>
                        <Link to={"/projetos"} state={{url: 'benelli'}} className={styles.btngo}>
                            <BsArrowRight />
                        </Link>
                    </p>
                </div>
        </section>

    )
}

export default Bikes