import { useState } from "react";
import styles from './Form.module.css'
import { FaArrowRightLong } from "react-icons/fa6";
import Logo from '../../assets/nology_logo.jpg'
import { calcularCashback } from "../../services/api";

export default function Form({ atualizarHistorico }) {

    const [tipoCliente, setTipoCliente] = useState("NORMAL");
    const [valor, setValor] = useState("")
    const [desconto, setDesconto] = useState("")
    const [cashback, setCashback] = useState(0)

    async function calcular() {

        if (desconto <= 0 || valor <= 0) {
            setValor("")
            setDesconto("")
            return alert("Insira valores maiores que zero.")
        }

        if (desconto > 100) {
            setValor("")
            setDesconto("")
            return alert("Desconto não pode ser maior que 100%.")
        } 
        
        const dados = {
        valor: Number(valor),
        desconto: Number(desconto),
        tipo_cliente: tipoCliente
        }

        const response = await calcularCashback(dados)

        if (!response) {
            return alert("Não foi possível calcular o cashback. Tente novamente.")
        }

        setCashback(response.cashback)

        atualizarHistorico()

        setValor("")
        setDesconto("")
        
    }

    return (
        <div className={styles.Container}>
            <header>
                <img src={Logo}></img>
                <h1>Calcule o valor do seu cashback</h1>
            </header>
            <main className={styles.Formulario}>
                <div className={styles.TipoCliente}>
                <label>Tipo de cliente</label>
                <select value={tipoCliente} onChange={(e) => setTipoCliente(e.target.value)}>
                    <option value="NORMAL">Cliente Normal</option>
                    <option value="VIP">Cliente VIP</option>
                </select>
                </div>
                <input type="number" className={styles.InputCompra} value={valor} onChange={(e) => setValor(Number(e.target.value))} placeholder="Informa o valor da compra" />
                <input type="number" className={styles.InputDesconto} value={desconto} onChange={(e) => setDesconto(Number(e.target.value))} placeholder="Desconto (%)" />
            </main>
            <button onClick={calcular}>Calcular<span className={styles.DetalheBotao}><FaArrowRightLong className={styles.iconeBotao} /></span></button>
        </div>
    )
}