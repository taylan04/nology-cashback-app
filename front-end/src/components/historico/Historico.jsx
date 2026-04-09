import styles from './Historico.module.css'

export default function Historico({historico}) {

    if (historico.length === 0) {
    return (
      <div className={styles.Empty}>
        Nenhuma consulta realizada ainda
      </div>
    )}

    return (
        <div className={styles.TableWrapper}>
            <table className={styles.Tabela}>
                <thead>
                    <tr className={styles.Header}>
                        <th>Cliente</th>
                        <th>Valor</th>
                        <th>Desconto</th>
                        <th>Cashback</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody className={styles.CorpoTabela}>
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
        </div>
    )
}