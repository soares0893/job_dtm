import Scripts from '../src/components/Scripts';
import Queries from '../src/components/Queries';
import Menu from '../src/components/Menu';
import Infos from '../src/components/Infos';

import axios from 'axios'
import { useEffect, useState } from 'react';

export async function getServerSideProps() {
  const response = await axios.get('https://job-dtm.vercel.app/api/arrayInfos')
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
        {props.array ? <Infos value={props.array}/> : <Infos value={[]}/>}
      </div>
    </div>
  )
    
}
