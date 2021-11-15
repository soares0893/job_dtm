import { useState } from "react"

import style from '../../css/Board.module.css';
import BoardForCovenants from "./BoardTypes/BoardForCovenants";
import BoardForUnits from "./BoardTypes/BoardForUnits";
import BoardForExams from "./BoardTypes/BoardFroExams";
import BoardPersonal from "./BoardTypes/BoardPersonal";
import AddCard from './Helper/AddCard';
import Menu from "./Menu";

export default function Board(props) {

    let [colorFromMenu, setColor] = useState('red');
    let [idFromMenu, setId] = useState('units');
    let [showCard, setShowcard] = useState(false);

    let [units, setUnits] = useState(props.value.units)
    let [covenants, setCovenants] = useState(props.value.cov)
    let [exams, setExams] = useState(props.value.exams)
    let [obs, setObs] = useState()

    function updateArray(array) {
        if(array[0] == 'units') { array.splice(0, 1), setUnits(array) }
        if(array[0] == 'covenants') { array.splice(0, 1), setCovenants(array) }
        if(array[0] == 'exams') { array.splice(0, 1), setExams(array) }
        if(array[0] == 'personal') { array.splice(0, 1), setObs(array) }
    }

    return (
        <div className={style.board}>
            <Menu onClick={(e) => {setId(e.id), setColor(e.style.backgroundColor)}} />
            
            <div className={style.boardChild} /* style={{backgroundColor: colorFromMenu}} */>
                {
                idFromMenu == 'covenants' ? <BoardForCovenants value={covenants} /> :
                
                idFromMenu == 'exams' ? <BoardForExams value={exams}/> :
                            
                idFromMenu == 'obs' ? <BoardPersonal /> : <BoardForUnits value={units}/>
                }
            </div>
            {showCard ? <AddCard value={idFromMenu} onChange={(e) => updateArray(e)} onClick={(e) => setShowcard(e) }/> : ''}
            <button onClick={()=> setShowcard(true)} className={style.addButton}>+</button>
        </div>
    )
}