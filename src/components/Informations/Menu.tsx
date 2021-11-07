import { useState } from 'react'
import style from '../../css/Menu.module.css'

interface MenuType {
    onClick: (e) => void
}

export default function Menu(props: MenuType) {

    const red = 'red'
    const violet = 'violet'
    const tomato = 'tomato'
    const green = 'green'

    return (
        <div className={style.menu}>
            {/*@ts-ignore*/}
            <span id="units" onClick={(e) => props.onClick(e.target)} style={{backgroundColor: red}} className={style.btn}>Unidades</span>
            {/*@ts-ignore*/}
            <span id="covenants" onClick={(e) => props.onClick(e.target)} style={{ backgroundColor: violet }} className={style.btn}>Convênios</span>
            {/*@ts-ignore*/}
            <span id="exams" onClick={(e) => props.onClick(e.target)} style={{ backgroundColor: green }} className={style.btn}>Exames</span>
            {/*@ts-ignore*/}
            <span id="personal" onClick={(e) => props.onClick(e.target)} style={{ backgroundColor: tomato }} className={style.btn}>Pessoal</span>
        </div>
    )
}