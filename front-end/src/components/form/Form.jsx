import { useState } from "react";
import styles from './Form.module.css'
import { FaArrowRightLong } from "react-icons/fa6";
import Logo from '../../assets/nology_logo.jpg'

export default function Form() {

    const [tipoCliente, setTipoCliente] = useState("NORMAL");

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
                <input className={styles.InputCompra} placeholder="Informa o valor da compra" />
                <input className={styles.InputDesconto} placeholder="Desconto (%)" />
            </main>
            <button>Calcular cashback <span className={styles.DetalheBotao}><FaArrowRightLong className={styles.iconeBotao} /></span></button>
        </div>
    )
}