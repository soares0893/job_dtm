import style from '../css/Menu.module.css'

export default function Menu() {
    return (
        <div className={style.menu}>
            <span className={style.btn}><a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/12WSYs-KdtJt1oQdAI82KpUz1EYqqGygi/view?usp=sharing">Convênios</a></span>
            <span className={style.btn}><a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/19TDcz0zalmJVxLmRWdx1ZEOCLkfACvaM/view?usp=sharing">Peso</a></span>
            <span className={style.btn}><a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1yZmso_Zt0Ez8GvI6JIG2lVgxDvewyq9N/view?usp=sharing">Aut. Covid</a></span>
            <span className={style.btn}><a rel="noreferrer" target="_blank" href="">Links - Acesso rápido</a></span>
            <span className={style.btn}><a rel="noreferrer" target="_blank" href="">Manutenção</a></span>
        </div>
    )
}