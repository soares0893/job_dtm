import styles from '../css/Infos.module.css'
import axios from 'axios'
import Infos from "../models/Infos";
import { useEffect, useState } from 'react';
import AddInfo from './AddInfo';

export default function Information(props) {

    let [arrayToRender, setRenderedArray] = useState([])

    let [add, setAdd] = useState(false)
    let [executedFunction, setExec] = useState(false)

    let arrayFromGetStaticProps = (props.value.map((r: Infos) => 
            <div key={Math.random()} className={styles.card}>
                <h2>{r.date}</h2>
                {r.type} <br />
                {r.units} <br />
                {r.forecast} <br />
            </div>
        ))
    

    function mapRenderededData(data) {
        const newArrayRendered = [];
        data.map((r) => newArrayRendered.push(
            <div key={Math.random()} className={styles.card}>
                <h4>{r.date}</h4> <br />
                {r.type} <br />
                {r.units} <br />
                {r.forecast} <br />
            </div>
        ));
        setExec(true)
        setRenderedArray(newArrayRendered);
    }

    async function getData() {
        const response = await axios.get<Infos[]>('http://localhost:3000/api/arrayInfos').then(
            resp => {
                const dataFromDb = resp.data
                mapRenderededData(dataFromDb)
            }
        )
    }

    
    function buttonAddInfo() {
        setAdd(true)
        getData()
    }

    return (
        <div className={styles.area}>
            {add ? <AddInfo value={true} add={() => getData()} close={() => setAdd(false)}/> : false}
            {executedFunction ? arrayToRender : arrayFromGetStaticProps}
            <button onClick={buttonAddInfo} className={styles.add}>+</button>
        </div>
    )
}
