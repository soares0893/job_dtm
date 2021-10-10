
import { useState } from 'react';
import style from '../css/Scripts.module.css';

const selectOptions = require('../data/selectOptions')

export default function Scripts() {

    const [complementInputs, setComplementInputs] = useState([])

    function complement(event)
    {
        const found = selectOptions.find(array => array[0] == event.target.value);



        function tr(key, value, className) {
            return (
                <tr key={key}>
                    <td><label className={className}>{value}</label></td>
                    <td><input className={className} type="text" /></td>
                </tr>
            )

        }

        if (found) {
            const array = [];

            array.push(tr("1", "Ind. Clínica", "formChild"));
            array.push(tr("2", "Convênio", "formChild"));
            array.push(tr("3", "Peso", "formChild"));
            array.push(tr("4", "Preparos", "formChild"));

            for (var i = 1; i < found.length; i++){
                array.push(tr(i*8, found[i], "formChild"))
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

        let data = '';

        for (var i = 0; i < children.length; i++) {

            switch (children[i].tagName) {
                case 'LABEL':
                    data += `${children[i].innerHTML}: `
                    break;
                case 'INPUT':
                    //@ts-ignore
                    data += `${children[i].value} //`
                    break;
                case 'TEXTAREA':
                    //@ts-ignore
                    data += `${children[i].value} //`
            }
        }
        navigator.clipboard.writeText(data);
    }

    return (
        <div className={style.form} id="form">
            <fieldset><legend>Atendimento</legend>
                <table>
                    <thead>
                        <tr>
                            <td><label className="formChild" >Contato</label></td>
                            <td><input className="formChild" type="text"/></td>
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
                <button onClick={copiar}>Copiar</button>
                <table>
                    <tbody>
                        {complementInputs}
                    </tbody>
                </table>
            </fieldset>
        </div>
    )
}