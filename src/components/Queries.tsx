import style from '../css/Queries.module.css';

export default function Queries() {

    return (
        <div className={style.area}>
            <fieldset>
                <legend>
                    📧 Verificação de exames/IC
                    <button >&#9986;</button>
                </legend>
                <table>
                    <tbody>
                        <tr><td><label>E-mail</label></td><td><input type="text" /></td></tr>
                        <tr><td><label>Caixa</label></td><td><input type="text" placeholder="AGENDA - AUTORIZA" /></td></tr>
                    </tbody>
                </table>
            </fieldset><br/>

            <fieldset>
                <legend>
                    ✔️ Verificação de Autorização
                    <button >&#9986;</button>
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

            <fieldset>
                <legend>⏭️ Envio de Connect p/ unidade
                    <button >&#9986;</button>
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

            <fieldset>
                <legend>⬇️ Saída no sistema SUS
                    <button >&#9986;</button>
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