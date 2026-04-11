import { useState } from "react";
import styles from './Form.module.css'
import { FaArrowRightLong } from "react-icons/fa6";
import Logo from '../../assets/nology_logo.jpg'
import { calcularCashback } from "../../services/api";

function textoParaNumero(texto) {
    const textoLimpo = texto.trim().replaceAll(" ", "").replaceAll(",", ".")
    if (textoLimpo === "") return NaN
    return Number(textoLimpo)
}

export default function Form({ atualizarHistorico }) {

    const [tipoCliente, setTipoCliente] = useState("NORMAL");
    const [valor, setValor] = useState("")
    const [desconto, setDesconto] = useState("")
    const [cashback, setCashback] = useState(0)

    async function calcular() {

        const valorCompra = textoParaNumero(valor)
        const descontoPercentual = textoParaNumero(desconto)

        const formularioOk = valorCompra > 0 && descontoPercentual > 0 && descontoPercentual <= 100
        
        if (!formularioOk) {
            return alert("Preencha valor da compra e desconto (máx. 100%) com números válidos.")
        }
        
        const dados = {
        valor: valorCompra,
        desconto: descontoPercentual,
        tipo_cliente: tipoCliente
        }

        const resposta = await calcularCashback(dados)

        if (!resposta) {
            return alert("Não foi possível calcular o cashback. Tente novamente.")
        }

        setCashback(resposta.cashback)

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
                <input type="text" inputMode="decimal" className={styles.InputCompra} value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Valor da compra (ex.: 1000 ou 1000,50)" autoComplete="off" />
                <input type="text" inputMode="decimal" className={styles.InputDesconto} value={desconto} onChange={(e) => setDesconto(e.target.value)} placeholder="Desconto % (ex.: 10 ou 10,5)" autoComplete="off" />
            </main>
            <button onClick={calcular}>Calcular<span className={styles.DetalheBotao}><FaArrowRightLong className={styles.iconeBotao} /></span></button>
        </div>
    )
}