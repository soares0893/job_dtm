import { useState } from "react"

import style from '../../css/Board.module.css';
import BoardForCovenants from "./BoardTypes/BoardForCovenants";
import BoardForUnits from "./BoardTypes/BoardForUnits";
import BoardForExams from "./BoardTypes/BoardFroExams";
import BoardPersonal from "./BoardTypes/BoardPersonal";
import AddCard from './Helper/AddCard';
import Menu from "./Menu";

export default function Board(props) {

    let [colorFromMenu, setColor] = useState('red')
    let [idFromMenu, setId] = useState('units');
    let [showCard, setShowcard] = useState(false);

    return (
        <div className={style.board}>
            <Menu onClick={(e) => {setId(e.id), setColor(e.style.backgroundColor)}} />
            
            <div className={style.boardChild} style={{backgroundColor: colorFromMenu}}>
                {
                idFromMenu == 'covenants' ? <BoardForCovenants value={props.value.cov} /> :
                
                idFromMenu == 'personal' ? <BoardPersonal /> :
                
                idFromMenu == 'exams' ? <BoardForExams /> : <BoardForUnits value={props.value.units}/>
                }
            </div>
            {showCard ? <AddCard value={idFromMenu} onClick={(e) => setShowcard(e) }/> : ''}
            <button onClick={()=> setShowcard(true)} className={style.addButton}>+</button>
        </div>
    )
}