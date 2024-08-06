import { useEffect, useState } from 'react'
import Card from '../../components/Card/index'
import styles from './Projeto.module.css'
import { useLocation } from 'react-router-dom'

function Projetos() {

    let { state } = useLocation();

    const [repositories, setRepositories ] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            try {
                const response = await fetch(`https://api.api-ninjas.com/v1/motorcycles?make=${state.url}`, {
                    headers: {
                        'X-Api-Key': 'pNjXo/G5LVNfkUEkLoBW8A==GByQa9Xd5YMx6QBn'
                    }
                });
                const data = await response.json();
                console.log(data); 
                setRepositories(data);
            } catch (error) {
                console.error('Erro ao buscar repositórios:', error);
            }   
        }
        buscarRepositorios()
    }, [])

    return (
        <section className={styles.projetos}>
            <h2>api</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo) => (
                                <Card
                                key = { repo.id }
                                name = { repo.make }
                                model = { repo.model }
                                type = { repo.type }
                                year = { repo.year }
                                displacement = { repo.displacement }
                                engine = { repo.engine }
                                power = { repo.power }
                                torque = { repo.torque }
                                compression = { repo.compression }
                                bore_stroke = { repo.bore_stroke }
                                valves_per_cylinder = { repo.valves_per_cylinder }
                                fuel_system = { repo.fuel_system }
                                fuel_control = { repo.fuel_control }
                                ignition = { repo.ignition }
                                lubrication = { repo.lubrication }
                                cooling = { repo.cooling }
                                gearbox = { repo.gearbox }
                                transmission = { repo.transmission }
                                clutch = { repo.clutch }
                                frame = { repo.frame }
                                front_suspension = { repo.front_suspension }
                                front_wheel_travel = { repo.front_wheel_travel }
                                rear_suspension = { repo.rear_suspension }
                                rear_wheel_travel = { repo.rear_wheel_travel }
                                front_tire = { repo.front_tire }
                                rear_tire = { repo.rear_tire }
                                front_brakes = { repo.front_brakes }
                                rear_brakes = { repo.rear_brakes }
                                total_weight = { repo.total_weight }
                                seat_height = { repo.seat_height }
                                total_height = { repo.total_height }
                                total_length = { repo.total_length }
                                total_width = { repo.total_width }
                                ground_clearance = { repo.ground_clearance }
                                wheelbase = { repo.wheelbase }
                                fuel_capacity = { repo.fuel_capacity }
                                starter = { repo.starter }
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>building...</p>
                )
            }
        </section>  
    )
}

export default Projetos