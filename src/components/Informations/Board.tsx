import axios from "axios";
import { useState } from "react"

import style from '../../css/Board.module.css';
import BoardForCovenants from "./BoardTypes/BoardForCovenants";
import BoardForUnits from "./BoardTypes/BoardForUnits";
import BoardForExams from "./BoardTypes/BoardFroExams";
import BoardObs from "./BoardTypes/BoardObs";
import AddCard from './Helper/AddCard';
import Menu from "./Menu";

export default function Board(props) {

    let [idFromMenu, setId] = useState('units');
    let [showCard, setShowcard] = useState(false);
    
    let [units, setUnits] = useState(props.value.units)
    let [covenants, setCovenants] = useState(props.value.cov)
    let [exams, setExams] = useState(props.value.exams)
    let [obs, setObs] = useState(props.value.obs)

    function updateArray(array) {            
        if(array[0] == 'units') { array.splice(0, 1), setUnits(array) }
        if(array[0] == 'covenants') { array.splice(0, 1), setCovenants(array) }
        if(array[0] == 'exams') { array.splice(0, 1), setExams(array) }
        if(array[0] == 'obs') { array.splice(0, 1), setObs(array) }
    }

    async function updateAfterDeleted(local) {
        await axios.get('https://job-dtm.vercel.app/api/' + local).then(
            response => {
                if(local == 'forUnits') { setUnits(response.data) }
                if(local == 'forCovenants') { setCovenants(response.data) }
                if(local == 'forExams') { setExams(response.data) }
                if(local == 'forObs') { setObs(response.data) }
            }
        )
    }

    return (
        <div className={style.board}>
            <Menu onClick={(e) => { setId(e.id) }} />

            <div className={style.boardChild} /* style={{backgroundColor: colorFromMenu}} */>
                {
                idFromMenu == 'units' && units.length !== 0 ? <BoardForUnits delete={(e) => updateAfterDeleted(e)} value={units} /> :
                        
                idFromMenu == 'covenants' && covenants.length !==0 ? <BoardForCovenants delete={(e) => updateAfterDeleted(e)} value={covenants} /> :
                
                idFromMenu == 'exams' && exams.length !== 0 ? <BoardForExams delete={(e) => updateAfterDeleted(e)} value={exams}/> :
                            
                idFromMenu == 'obs' && obs.length !== 0 ? <BoardObs /> : ''
                }
            </div>
            {showCard ? <AddCard value={idFromMenu} onChange={(e) => updateArray(e)} onClick={(e) => setShowcard(e) }/> : ''}
            <button onClick={()=> setShowcard(true)} className={style.addButton}>+</button>
        </div>
    )
}