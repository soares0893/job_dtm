import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../css/AddInfo.module.css';
import Infos from '../models/Infos';

interface AddInfoType {
    value: boolean
    add: () => void
    close: () => void
}

export default function AddInfo(props: AddInfoType) {

    async function getDataDb() {
        await axios.get('https://job-dtm.vercel.app/api/arrayInfos').then(
            resp => { props.add() }
        )
    }
    async function postDB(obj) {
        await axios.post<Infos[]>('https://job-dtm.vercel.app/api/arrayInfos', obj).then(() => getDataDb())
    }

    useEffect(() => console.log('useEffetc on AddInfo'))

    function addIndoOnDatabase() {
        //@ts-ignore
        const date = document.querySelector("#data").value
        //@ts-ignore
        const type = document.querySelector("#type").value
        //@ts-ignore
        const units = document.querySelector("#units").value
        //@ts-ignore
        const forecast = document.querySelector("#forecast").value

        if (date != '' || type != '' || units != '' || forecast != '') {
            const obj = { date, type, units, forecast }
            postDB(obj)
            props.close()
        }
    }

    return (
        <div className={styles.default}>
            <h3>Add new information</h3>
            <table>
                <thead></thead>
                <tbody>
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
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}