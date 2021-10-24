import Scripts from '../src/components/Scripts';
import Queries from '../src/components/Queries';
import Menu from '../src/components/Menu';
import Infos from '../src/components/Infos';

import axios from 'axios'
import { useEffect, useState } from 'react';

export async function getStaticProps() {
  const response = await fetch('/api/arrayInfos')
  const data = response
    return { props: {array: data}} 
}

export default function Home(props) {
  const [data, setData] = useState(props.array)

  console.log(data)

  useEffect(() => {
    console.log('useEffect')
  })

  return (
    <div style={{ display: "flex"}}>
      <Scripts />
      <Queries />
      <div>
        <Menu />
        {data ? <Infos value={data}/> : ''}
      </div>
    </div>
  )
    
}
