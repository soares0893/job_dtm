import Scripts from '../src/components/Scripts';
import Queries from '../src/components/Queries';
import Menu from '../src/components/Menu';
import Infos from '../src/components/Infos';

import axios from 'axios'
import { useEffect, useState } from 'react';
import InfosModel from '../src/models/Infos';

import styles from '../src/css/Infos.module.css'

export async function getStaticProps() {
  const response = await axios.get('https://my-bassist-chris.mybassistchris.now.sh/api/arrayInfos')
  return { props: {array: response.data}} 
}

export default function Home(props) {

  useEffect(() => {})

  return (
    <div style={{ display: "flex"}}>
      <Scripts />
      <Queries />
      <div>
        <Menu />
        {props.array ? <Infos value={props.array}/> : ''}
      </div>
    </div>
  )
    
}
