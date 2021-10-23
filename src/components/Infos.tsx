import styles from '../css/Infos.module.css'
import axios from 'axios'
import Infos from "../models/Infos";
import { useState } from 'react';
import AddInfo from './AddInfo';

export async function getServerSideProps() {
    console.log('estou aqui')

}
export default function Information(props) {

    const [data, setData] = useState(props.value)
    
    const card = (
        data.map(obj => (
            <div key={Math.random()} className={styles.card}>
                    <button value={Math.random()} onClick={remove} className={styles.btn}>X</button>
                    {obj.date}<br/>
                    {obj.type}<br/>
                    {obj.units}<br/>
                    {obj.forecast}<br/>
                </div>
            ))
    )

    async function queryRemove(array) {
        await axios.delete('http://localhost:3000/api/arrayInfos',
            {
                data: array 
            }).then(
                response => {
                    setData(response.data)
            }
        )                    
    }

    function remove(e) {
        const array = props.value
        for (let i = 0; i < array.length; i++){
            if (array[i].id == e.target.value) {
                //colocar alert(sim ou não para confirmar exclusão)
                queryRemove(array[i])
            }
        }
    }
    let [add, setAdd] = useState(false)
    
    function addInfo() {
        setAdd(true)
        console.log('Add a new information')
    }

    return (
        <div className={styles.area}>
            {add ? <AddInfo value={true} close={() => setAdd(false)}/> : false}
            {data.map(obj => (
            <div key={obj.id} className={styles.card}>
                    <button value={obj.id} onClick={remove} className={styles.btn}>X</button>
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
