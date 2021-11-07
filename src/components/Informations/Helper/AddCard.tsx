
import axios from 'axios';
import { useState } from 'react';
import style from '../../../css/AddButton.module.css';

const defaultURL = 'https://job-dtm.vercel.app'

interface AddButtonType {
    value: string
    onClick: (e) => void
}

export default function AddButton(props: AddButtonType) {
    let [width, setWidth] = useState('span 1');

    async function save() {
        //@ts-ignore
        const data = document.querySelector("#data").value
        //@ts-ignore
        const title = document.querySelector("#title").value
        //@ts-ignore
        const subtitle = document.querySelector("#subtitle").value
        //@ts-ignore
        const subject = document.querySelector("#subject").value

        const object = {data, title, subtitle, subject, width}
        
        if (props.value == 'units') {
            await axios.post(defaultURL + '/api/forUnits', object).then(
                response => {
                    console.log(response)
                }
            )
        }
        if (props.value == 'covenants') {
            await axios.post(defaultURL + '/api/forCovenants', object).then(
                response => {
                    console.log(response)
                }
                )
        }
        props.onClick(false)
    }
    async function cancel() {        
        if (props.value == 'units') {
            await axios.get(defaultURL + '/api/forUnits').then(
                response => {
                    console.log(response)
                }
            )
        }
        if (props.value == 'covenants') {
            await axios.get(defaultURL + '/api/forCovenants').then(
                response => {
                    console.log(response)
                }
            )            
        }        
        props.onClick(false)
    }

    return (
        <div className={style.div}>
            <div style={{gridColumn: width}} className={style.default}>
            <label className={style.labelForInputsText} htmlFor="data">Data </label> <br/><input className={style.inputsText} type='text' id='data'/><br/>
            <label className={style.labelForInputsText} htmlFor="title">Título </label> <br/><input className={style.inputsText} type='text' id='title'/><br/>
            <label className={style.labelForInputsText} htmlFor="subtitle">Subtítulo </label> <br/><input className={style.inputsText} type='text' id='subtitle'/><br/>
            <label className={style.labelForInputsText} htmlFor="subject">Assunto </label> <br /><textarea id='subject'/><br />
            
            <span style={{marginBottom: '10px'}}>
                Tamanhos: 
                <input className={style.inputsRadio} name="width" onClick={()=> setWidth('span 1')} id="span1" type="radio"/><label htmlFor="um">1</label>
                <input className={style.inputsRadio} name="width" onClick={()=> setWidth('span 2')} id="span2" type="radio"/><label htmlFor="dois">2</label>
                <input className={style.inputsRadio} name="width" onClick={()=> setWidth('span 3')} id="span3" type="radio"/><label htmlFor="tres">3</label>
            </span>
                
            <span>
                <button onClick={save}>Salvar</button>
                <button onClick={cancel}>Cancelar</button>
            </span>
        </div>
        </div>
    )
}