import Historico from "../components/historico/Historico"
import Form from "../components/form/Form"
import styles from './Home.module.css'

export default function Home() {

    

    return (
        <div className={styles.Container}>
            <Form />
            <Historico historico={} />
        </div>
    )
}