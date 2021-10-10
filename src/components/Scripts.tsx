
import { useState } from 'react';
import style from '../css/Scripts.module.css';

const selectOptions = require('../data/selectOptions')

export default function Scripts() {

    const [complementInputs, setComplementInputs] = useState([])

    function complement(event)
    {
        const found = selectOptions.find(array => array[0] == event.target.value);



        function tr(key, value, tdLabelClass, tdInputClass) {
            return (
                <tr key={key}>
                    <td className={tdLabelClass}><label className="formChild">{value}</label></td>
                    <td className={tdInputClass}><input className="formChild" type="text" /></td>
                </tr>
            )

        }

        if (found) {
            const array = [];

            array.push(tr("1", "Ind. Clínica", style.tdLabel, style.tdInput));
            array.push(tr("2", "Convênio", style.tdLabel, style.tdInput));
            array.push(tr("3", "Peso", style.tdLabel, style.tdInput));
            array.push(tr("4", "Preparos", style.tdLabel, style.tdInput));

            for (var i = 1; i < found.length; i++){
                array.push(tr(i*8, found[i], style.tdLabel, style.tdInput))
            }
            setComplementInputs(array);
        }
        
    }

    const options = () => {
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

    function copiar() {
        const form = document.querySelector('#form')
        const children = form.querySelectorAll('.formChild')
        const uraCheckBox = document.querySelector('#uraCheckBox')
        const amilCheckBox = document.querySelector('#amilCheckBox')

        let data = '';

        for (var i = 0; i < children.length; i++) {

            switch (children[i].tagName) {
                case 'LABEL':
                    data += `${children[i].innerHTML}: `
                    break;
                case 'INPUT':
                    //@ts-ignore
                    data += `${children[i].value} // `
                    break;
                case 'TEXTAREA':
                    //@ts-ignore
                    data += `${children[i].value} // `
            }
        }
        //@ts-ignore
        if (amilCheckBox.checked) {
            data += ` Ciente enviar dados para o email: amilcm@grupopardini.com.br e, caso não receba token até dia do exame, retornar contato.`            
        }
        
        //@ts-ignore
        if (uraCheckBox.checked) {
            data += ` Realizado transferência para URA.`
        }


        navigator.clipboard.writeText(data);
    }

    return (
        <div className={style.form} id="form">
            <fieldset><legend>Atendimento</legend>
                <table>
                    <thead>
                        <tr>
                            <td className={style.tdLabel}><label className="formChild">Contato</label></td>
                            <td className={style.tdInput}><input className="formChild" type="text"/></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                <label className="formChild">Exames</label> <br/> <textarea className="formChild" />
                            </td>
                        </tr>
                    </tbody>
                </table>                
                <select onChange={complement}>
                    {options()}                
                </select>
                <table className={style.trFunctions}>
                    <thead >
                        <tr>
                            <td className={style.tdUra}>
                                <label>Ura <input id="uraCheckBox" type="checkbox"/></label>
                            </td>
                            <td className={style.tdAmil}>
                                <label>Amil <input id="amilCheckBox" type="checkbox"/></label>
                            </td>
                            <td>
                                <button onClick={copiar}>Copiar</button>
                            </td>
                        </tr>
                    </thead>
                </table>
                <table>
                    <tbody>
                        {complementInputs}
                    </tbody>
                </table>
            </fieldset>
        </div>
    )
}