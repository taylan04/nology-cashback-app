import Historico from "../components/historico/Historico"
import Form from "../components/form/Form"
import styles from './Home.module.css'
import { useEffect, useState } from "react"
import { buscarHistorico } from "../services/api"

export default function Home() {

    const [historico, setHistorico] = useState([])

    useEffect(() => {
        carregarHistorico()
    }, [])

    async function carregarHistorico() {
        const data = await buscarHistorico()
        setHistorico(data)
    }

    return (
        <div className={styles.Container}>
            <Form atualizarHistorico={carregarHistorico} />
            <Historico historico={historico} />
        </div>
    )
}