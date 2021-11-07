import Scripts from '../src/components/Scripts';
import Queries from '../src/components/Queries';

import axios from 'axios'
import { useEffect, useState } from 'react';
import Board from '../src/components/Informations/Board';
import AddButton from '../src/components/Informations/Helper/AddCard';

export async function getServerSideProps() {
  const respUnits = await axios.get('http://localhost:3000/api/forUnits')
  const respCovenants = await axios.get('http://localhost:3000/api/forCovenants')
  return {
    props: 
      {
        units: respUnits.data,
        cov: respCovenants.data
      }
    
  }
}

export default function Home(props) {

  console.log(props)

  useEffect(() => {})

  return (
    <div style={{ display: "flex" }}>
      <div><Scripts /></div>
      <div><Queries /></div>
      <div><Board value={props}/></div>
    </div>    
  )
    
}





/**
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