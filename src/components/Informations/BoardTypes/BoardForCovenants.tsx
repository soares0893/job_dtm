import style from '../../../css/Board.module.css';

export default function BoardForCovenants(props) {
    
    return (
        <div className={style.card}>
            {props.value.map(e =>
                <table style={{gridColumn: e.width}} key={Math.random()}>
                    <tbody>
                        <tr><td>{e.data}</td></tr>
                        <tr><td>{e.title}</td></tr>
                        <tr><td>{e.subtitle}</td></tr>
                        <tr><td><pre className={style.subject}>{e.subject}</pre></td></tr>
                    </tbody>
                </table>
            )}            
        </div>
    )
}