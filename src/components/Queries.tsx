import style from '../css/Queries.module.css';

export default function Queries() {

    function copiar(from){
        const fieldset = document.querySelector(from)
        const span = fieldset.getElementsByTagName('span')
        const labels = fieldset.getElementsByTagName('label')
        const inputs = fieldset.getElementsByTagName('input')

        let data = '';
        data += `*${span[0].innerHTML}* \n`

        for (var i = 0; i < labels.length; i++) {
            data += `${labels[i].innerHTML}: ${inputs[i].value}  \n`
        }

        console.log(data)
        
    }

    return (
        <div className={style.area}>
            <fieldset id="um">
                <legend>
                    <span>📧 Verificação de exames/IC</span>
                    <button onClick={e => copiar("#um")}>&#9986;</button>
                </legend>
                <table>
                    <tbody>
                        <tr><td><label>E-mail</label></td><td><input type="text" /></td></tr>
                        <tr><td><label>Caixa</label></td><td><input type="text" placeholder="AGENDA - AUTORIZA" /></td></tr>
                    </tbody>
                </table>
            </fieldset><br/>

            <fieldset id="dois">
                <legend>
                    <span>✔️ Verificação de Autorização</span>
                    <button onClick={e => copiar("#dois")}>&#9986;</button>
                </legend>
                <table>
                    <tbody>
                        <tr><td><label>E-mail</label></td><td><input type="text" /></td></tr>
                        <tr><td><label>Conv.</label></td><td><input type="text" /></td></tr>
                        <tr><td><label>Protocolo</label></td><td><input type="text" /></td></tr>
                        <tr><td><label>Caixa</label></td><td><input type="text" placeholder="BOARJ - AUTORIZA" /></td></tr>
                    </tbody>
                </table>
            </fieldset><br/>

            <fieldset id="tres">
                <legend>
                    <span>⏭️ Connect p/ unidade</span>
                    <button onClick={e => copiar("#tres")}>&#9986;</button>
                </legend>
                <table>
                    <tbody>
                        <tr><td><label>Cliente</label></td><td><input type="text" /></td></tr>
                        <tr><td><label>Protocolo</label></td><td><input type="text" /></td></tr>
                        <tr><td><label>Unidade</label></td><td><input type="text" /></td></tr>
                        <tr><td><label>Motivo</label></td><td><input type="text" /></td></tr>
                    </tbody>
                </table>
            </fieldset><br/>

            <fieldset id="quatro">
                <legend>
                    <span>⬇️ Saída no sistema SUS</span>
                    <button onClick={e => copiar("#quatro")}>&#9986;</button>
                </legend>
                <table>
                    <tbody>
                        <tr><td><label>Cliente</label></td><td><input type="text" /></td></tr>
                        <tr><td><label>CNS</label></td><td><input type="text" /></td></tr>
                        <tr><td><label>Data</label></td><td><input type="text" /></td></tr>
                        <tr><td><label>Unidade</label></td><td><input type="text" /></td></tr>
                        <tr><td><label>Chave</label></td><td><input type="text" placeholder="CASO EXAME REALIZADO" /></td></tr>
                    </tbody>
                </table>
            </fieldset>
        </div>
    )
}