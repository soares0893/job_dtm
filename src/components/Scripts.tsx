
import style from '../css/Scripts.module.css';

const selectOptions = require('../data/selectOptions')

export default function Scripts() {

    const selcOptions = () => {
        const array = []
        for (var i = 0; i < selectOptions.length; i++) {
            array.push(
                <option
                    key={i}
                    value={selectOptions[i][0]}
                    >
                    {selectOptions[i][0]}
                </option>)
        }
        return array
    }

    return (
        <div className={style.area}>
            <fieldset><legend>Atendimento</legend>
                <table>
                    <thead>
                        <tr>
                            <td>Contato</td>
                            <td><input type="text"/></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                <label>Exames <br/> <textarea/></label>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>                
                <select>
                    {selcOptions()}                
                </select>
            </fieldset>
        </div>
    )
}