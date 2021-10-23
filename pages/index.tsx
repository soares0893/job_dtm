import Scripts from '../src/components/Scripts';
import Queries from '../src/components/Queries';
import Menu from '../src/components/Menu';
import Infos from '../src/components/Infos';

import axios from 'axios'

/* export async function getStaticProps() {
  const response = await axios.get('http://localhost:3000/api/arrayInfos')
  const data = response.data
  return { props: {array: data}}
} */

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
