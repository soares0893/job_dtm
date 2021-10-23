import axios from 'axios';
import styles from '../css/AddInfo.module.css';

interface AddInfoType {
    value: boolean
    close: () => void
}

export default function AddInfo(props: AddInfoType) {

    //const { value } = props.value
    async function postDB(obj) {
        await axios.post('http://localhost:3000/api/arrayInfos', obj).then(
            response => console.log(response)
        )
    }

    function addIndoOnDatabase() {
        //@ts-ignore
        const data = document.querySelector("#data").value
        //@ts-ignore
        const type = document.querySelector("#type").value
        //@ts-ignore
        const units = document.querySelector("#units").value
        //@ts-ignore
        const forecast = document.querySelector("#forecast").value

        if (data != '' && type != '' && units != '' && forecast != '') {
            const obj = { data, type, units, forecast }
            postDB(obj)
        }

    }

    return (
        <div className={styles.default}>
            <h3>Add new information</h3>
            <h2>{props.value}</h2>
            <table>
                <tr>
                    <td>Data</td><td><input id="data" type="text"/></td>
                </tr>
                <tr>
                    <td>Tipo</td><td><input id="type" type="text"/></td>
                </tr>
                <tr>
                    <td>Unidades</td><td><input id="units" type="text"/></td>
                </tr>
                <tr>
                    <td>Retorno</td><td><input id="forecast" type="text"/></td>
                </tr>
                <tr>
                    <td><button onClick={addIndoOnDatabase}>Adicionar</button></td><td><button onClick={props.close}>Cancelar</button></td>
                </tr>
            </table>
        </div>
    )
}