import styles from '../css/Infos.module.css'
export default function Infos() {
    return (
        <div className={styles.area}>
            <div className={styles.card}>
                🚨 Comunicado - 11/10 🚨<br/>

                TIPO: RM Coluna☠️<br/>
                UNIDADES: Miguel Couto 🏥<br/>
                INFORMAÇÃO: Inoperante<br />
                PREVISÃO: Não

            </div>
            <span className={styles.card}>
                🚨Comunicado - 11/10 🚨<br/>

                TIPO: RM ☠️<br/>
                UNIDADES: Jpa 🏥<br/>
                INFORMAÇÃO: Inoperante 🚫<br/>
                RETORNO: Sem previsão ❌<br/>
            </span>
            <span className={styles.card}>
                Comunicado - 11/10 🚨<br/>

                TIPO: RM - PH ☠️<br/>
                UNIDADES: Buenos Aires🏥<br/>
                INFORMAÇÃO: Inoperante 🚫<br/>
                RETORNO: Sem previsão ❌<br/>
            </span>
            <span className={styles.card}>
                Comunicado - 13/10 🚨<br/>

                TIPO: RM GE  ☠️<br/>
                UNIDADES: CAMPO GRANDE 🏥<br/>
                INFORMAÇÃO: Inoperante 🚫<br/>
            </span>
            <span className={styles.card}>
                A
            </span>
        </div>
    )
}