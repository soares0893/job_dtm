import { useState } from 'react'
import style from '../../css/Menu.module.css'

interface MenuType {
    onClick: (e) => void
}

export default function Menu(props: MenuType) {

    let [units, setUnits] = useState(true);
    let [covenants, setCov] = useState(false);
    let [exams, setExams] = useState(false);
    let [obs, setObs] = useState(false);

    function selectedMenuButton(id) {
    if(id == 'units') { setUnits(true), setCov(false), setExams(false), setObs(false) }
    if(id == 'covenants') { setUnits(false), setCov(true), setExams(false), setObs(false) }
    if(id == 'exams') { setUnits(false), setCov(false), setExams(true), setObs(false) }
    if(id == 'obs') { setUnits(false), setCov(false), setExams(false), setObs(true) }
  }

    return (
        <div className={style.menu}>
            {/*@ts-ignore*/}
            <span id="units" onClick={(e) => {props.onClick(e.target), selectedMenuButton(e.target.id)}} className={units == true ? (style.selectedBTN) : style.notSelectedBTN}>Unidades</span>
            {/*@ts-ignore*/}
            <span id="covenants" onClick={(e) => {props.onClick(e.target), selectedMenuButton(e.target.id)}} className={covenants == true ? (style.selectedBTN) : style.notSelectedBTN}>Convênios</span>
            {/*@ts-ignore*/}
            <span id="exams" onClick={(e) => {props.onClick(e.target), selectedMenuButton(e.target.id)}} className={exams == true ? (style.selectedBTN) : style.notSelectedBTN}>Exames</span>
            {/*@ts-ignore*/}
            <span id="obs" onClick={(e) => {props.onClick(e.target), selectedMenuButton(e.target.id)}} className={obs == true ? (style.selectedBTN) : style.notSelectedBTN}>Observações</span>
        </div>
    )
}