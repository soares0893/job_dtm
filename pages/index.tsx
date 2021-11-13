import JScript from 'next/script'
import Scripts from '../src/components/Scripts';
import Queries from '../src/components/Queries';

import styles from '../src/css/Index.module.css';

import axios from 'axios'
import { useEffect, useState } from 'react';
import Board from '../src/components/Informations/Board';

export async function getServerSideProps() {
  const respUnits = await axios.get('https://job-dtm.vercel.app/api/forUnits')
  const respCovenants = await axios.get('https://job-dtm.vercel.app/api/forCovenants')
  return {
    props: 
      {
        units: respUnits.data,
        cov: respCovenants.data
      }
    
  }
}

export default function Home(props) {

  let [beggin, setBeggin] = useState(true);
  let [config, setConfig] = useState(false);

  useEffect(() => { })
  
  function selectedMenuButton(id) {
    if(id == 'inicio') setBeggin(true), setConfig(false)
    if(id == 'config') setBeggin(false), setConfig(true)
  }

  return (
    <div>
      <JScript src="https://kit.fontawesome.com/a85f933ff4.js" crossOrigin="anonymous"></JScript>
      <div className={styles.naveBar}>
        <div>
          <span className={styles.title}>Central de Atendimento</span>
        </div>
        <div className={styles.menu}>
          {beggin == true ?
            <span className={styles.selected}>Início</span> :
            //@ts-ignore
            <span id='inicio' onClick={(e) => selectedMenuButton(e.target.id)} className={styles.notSelected}>Início</span>}
          {config == true ?
            <span className={styles.selected}>Configurações</span> :
            //@ts-ignore
            <span id='config' onClick={(e) => selectedMenuButton(e.target.id)} className={styles.notSelected}>Configurações</span>}
        </div>
        <div className={styles.profile}>
          <span><i className="fas fa-user-astronaut"></i></span>
        </div>
      </div>
      <div className={styles.body}>
        {beggin == true ? 
        <div style={{ display: "flex" }}>
          <div style={{paddingTop: '0px'}}><Scripts /></div>
          <div ><Queries /></div>
          <div><Board value={props}/></div>
        </div> : config ==  true ? <div>Tela para Configurações</div> : ''
      }
      </div>
    </div>    
  )
    
}





/**
 * return (
    <div style={{ display: "flex" }}>
      <div style={{marginTop: '40px', paddingTop: '0px'}}><Scripts /></div>
      <div style={{marginTop: '40px'}}><Queries /></div>
      <div><Board value={props}/></div>
    </div>    
  )
 * 
    <div style={{
      display: 'flex'
    }}>
      Usando positions com CSS
      <div style={{
        backgroundColor: 'blue',
        minHeight: '200px',
        minWidth: '200px',

      }}>blue</div>
      <div style={{
        backgroundColor: 'green',
        minHeight: '150px',
        maxHeight: '150px',
        minWidth: '150px',
        maxWidth: '150px',
        
      }}>green</div>
      <div style={{
        backgroundColor: 'yellow',
        minHeight: '100px',
        maxHeight: '100px',
        minWidth: '100px',
        maxWidth: '100px',
        
      }}>yellow</div>
    </div>
 */