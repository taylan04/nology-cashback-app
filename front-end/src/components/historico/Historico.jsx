import styles from './Historico.module.css'

export default function Historico({historico}) {
    return (
        <table>
            <thead>
                <tr className={styles.header}>
                    <th>Cliente</th>
                    <th>Valor</th>
                    <th>Desconto</th>
                    <th>Cashback</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody className={styles.corpoTabela}>
                {historico.map((item, index) => (
                <tr className={styles.celula} key={index}>
                    <td>{item.tipo_cliente}</td>
                    <td>R$ {item.valor}</td>
                    <td>{item.desconto}%</td>
                    <td>R$ {item.cashback}</td>
                    <td>{item.data}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}