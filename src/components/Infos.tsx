import styles from '../css/Infos.module.css'
import axios from 'axios'
import Infos from "../models/Infos";
import { useEffect, useState } from 'react';
import AddInfo from './AddInfo';

export async function getServerSideProps() {
    console.log('estou aqui')

}
export default function Information(props) {

    let [data, setData] = useState(props.value)
    let [add, setAdd] = useState(false)

    async function getData() {
        console.log('getData')
        const response = await fetch('/api/arrayInfos').then(
            resp => setData(resp)
        )
        //setData(response.data)
    }
    
    function addInfo() {
        setAdd(true)
    }

    return (
        <div className={styles.area}>
            {add ? <AddInfo value={true} add={() => getData()} close={() => setAdd(false)}/> : false}
            {data.map(obj => (
            <div key={Math.random()} className={styles.card}>
                    <button value={obj.id} onClick={() => console.log('remover')} className={styles.btn}>X</button>
                    {obj.date}<br/>
                    {obj.type}<br/>
                    {obj.units}<br/>
                    {obj.forecast}<br/>
                </div>
            ))}
            <button onClick={addInfo} className={styles.add}>+</button>
        </div>
    )
}
