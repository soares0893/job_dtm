import style from '../../../css/Board.module.css';

export default function BoardForUnits(props) {
    
    return (
        <div className={style.card}>
            {props.value.map(e =>
                <table style={{gridColumn: e.width}} key={Math.random()}>
                    <tr><td>{e.data}</td></tr>
                    <tr><td>{e.title}</td></tr>
                    <tr><td>{e.subtitle}</td></tr>
                    <tr><td>{e.subject}</td></tr>
                </table>
            )}            
        </div>
    )
}