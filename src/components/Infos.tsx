import styles from '../css/Infos.module.css'
export default function Infos() {

    function selected() {
        alert('Deseja remover ou editar?');
    }

    function addInfo() {
        alert('Adicionar informação');
    }

    return (
        <div className={styles.area}>
            <div className={styles.card}>
                <button onClick={selected} className={styles.btn}>X</button>
                🚨 Comunicado - 11/10 🚨<br/>

                TIPO: RM Coluna☠️<br/>
                UNIDADES: Miguel Couto 🏥<br/>
                INFORMAÇÃO: Inoperante<br />
                PREVISÃO: Não

            </div>
            <span className={styles.card}>
                <button onClick={selected} className={styles.btn}>X</button>

                🚨Comunicado - 11/10 🚨<br/>

                TIPO: RM ☠️<br/>
                UNIDADES: Jpa 🏥<br/>
                INFORMAÇÃO: Inoperante 🚫<br/>
                RETORNO: Sem previsão ❌<br/>
            </span>
            <span className={styles.card}>
                <button onClick={selected} className={styles.btn}>X</button>

                Comunicado - 11/10 🚨<br/>

                TIPO: RM - PH ☠️<br/>
                UNIDADES: Buenos Aires🏥<br/>
                INFORMAÇÃO: Inoperante 🚫<br/>
                RETORNO: Sem previsão ❌<br/>
            </span>
            <span className={styles.card}>
                <button onClick={selected} className={styles.btn}>X</button>

                Comunicado - 13/10 🚨<br/>

                TIPO: RM GE  ☠️<br/>
                UNIDADES: CG 🏥<br/>
                SITUAÇÃO: Inoperante 🚫<br/>
            </span>
            <span className={styles.card}>
                <button onClick={selected} className={styles.btn}>X</button>

                Comunicado<br/>
                TIPO:<br/>
                UNIDADES:<br />
                Retorno:<br/>
            </span>
            <span className={styles.card}>
                <button onClick={selected} className={styles.btn}>X</button>

                A
            </span>
            <button onClick={addInfo} className={styles.add}>+</button>
        </div>
    )
}