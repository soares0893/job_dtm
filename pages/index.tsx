import Scripts from '../src/components/Scripts';
import Queries from '../src/components/Queries';
import Menu from '../src/components/Menu';
import Infos from '../src/components/Infos';

import axios from 'axios'

export async function getStaticProps() {
  try {
    const response = await axios.get('/api/arrayInfos')
    const data = response.data
    return { props: {array: data}}    
  } catch {
    return { props: {array: []}} 
  }
}

export default function Home(props) {

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
