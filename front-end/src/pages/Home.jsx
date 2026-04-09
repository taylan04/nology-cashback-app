import Historico from "../components/historico/Historico"
import Form from "../components/form/Form"
import styles from './Home.module.css'

export default function Home() {

    const historicoMock = [
    {
        id: 1,
        tipo_cliente: "VIP",
        valor: 600,
        desconto: 20,
        cashback: 48,
        data: "2026-04-10 14:32"
    },
    {
        id: 2,
        tipo_cliente: "NORMAL",
        valor: 450,
        desconto: 10,
        cashback: 20.25,
        data: "2026-04-10 13:10"
    },
    {
        id: 3,
        tipo_cliente: "VIP",
        valor: 800,
        desconto: 15,
        cashback: 68,
        data: "2026-04-09 18:45"
    },
    {
        id: 4,
        tipo_cliente: "NORMAL",
        valor: 300,
        desconto: 5,
        cashback: 14.25,
        data: "2026-04-09 16:20"
    },
    {
        id: 5,
        tipo_cliente: "VIP",
        valor: 520,
        desconto: 0,
        cashback: 57.2,
        data: "2026-04-08 11:05"
    }
    ];

    return (
        <div className={styles.Container}>
            <Form />
            <Historico historico={historicoMock} />
        </div>
    )
}