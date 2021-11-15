
import axios from 'axios';
import { useState } from 'react';
import style from '../../../css/AddButton.module.css';

const defaultURL = 'https://job-dtm.vercel.app'

interface AddButtonType {
    value: string
    onClick: (e) => void
    onChange: (e) => void
}

export default function AddButton(props: AddButtonType) {

    let [width, setWidth] = useState('span 1')

    async function getDataWithAxios(
        from: string,
        address: string,
        toArray: string[],
        func: (e) => void
    ) {
        await axios.get(defaultURL + address).then(
            response => {
                toArray.push(from)
                let respArray: any = response.data
                for (let i = 0; i < respArray.length; i++) {
                    toArray.push(respArray[i])
                }
                func(toArray)
            }
        )

    }

    async function save() {
        //@ts-ignore
        const data = document.querySelector("#data").value
        //@ts-ignore
        const title = document.querySelector("#title").value
        //@ts-ignore
        const subtitle = document.querySelector("#subtitle").value
        //@ts-ignore
        const subject = document.querySelector("#subject").value

        const object = { data, title, subtitle, subject, width }
        let array: [] = []
        
        if (props.value == 'units') {
            await axios.post(defaultURL + '/api/forUnits', object).then(
                response => {
                    console.log(response)
                    getDataWithAxios(props.value, '/api/forUnits', array, (e) => props.onChange(array))
                    console.log('getDataWithAxios is working perfectly for Units.')
                }
            )
        }
        if (props.value == 'covenants') {
            await axios.post(defaultURL + '/api/forCovenants', object).then(
                response => {
                    console.log(response)
                    getDataWithAxios(props.value, '/api/forCovenants', array, (e) => props.onChange(array))
                    console.log('getDataWithAxios is working perfectly for Covenants.') 
                }
                )
        }
        if (props.value == 'exams') {
            await axios.post(defaultURL + '/api/forExams', object).then(
                response => {
                    console.log(response)
                    getDataWithAxios(props.value, '/api/forExams', array, (e) => props.onChange(array))
                    console.log('getDataWithAxios is working perfectly for Exams.')
                }
            )
        }
        props.onClick(false)
    }
    async function cancel() {
        console.log('function for cancel')         
        props.onClick(false)
    }

    return (
        <div className={style.div}>
            <div style={{gridColumn: width}} className={style.default}>
            <label className={style.labelForInputsText} htmlFor="data">Data </label> <br/><input className={style.inputsText} type='text' id='data'/><br/>
            <label className={style.labelForInputsText} htmlFor="title">Título </label> <br/><input className={style.inputsText} type='text' id='title'/><br/>
            <label className={style.labelForInputsText} htmlFor="subtitle">Subtítulo </label> <br/><input className={style.inputsText} type='text' id='subtitle'/><br/>
            <label className={style.labelForInputsText} htmlFor="subject">Assunto </label> <br /><textarea id='subject'/><br />
            
            <span className={style.width}>
                    <b>Tamanhos: </b>
                <label htmlFor="um">1 <input className={style.inputsRadio} name="width" onClick={()=> setWidth('span 1')} id="span1" type="radio"/></label>
                <label htmlFor="dois">2 <input className={style.inputsRadio} name="width" onClick={()=> setWidth('span 2')} id="span2" type="radio"/></label>
                <label htmlFor="tres">3 <input className={style.inputsRadio} name="width" onClick={()=> setWidth('span 3')} id="span3" type="radio"/></label>
            </span>
                
            <span>
                <button onClick={save}>Salvar</button>
                <button onClick={cancel}>Cancelar</button>
            </span>
        </div>
        </div>
    )
}
