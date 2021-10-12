import Scripts from '../src/components/Scripts';
import Queries from '../src/components/Queries';
import Menu from '../src/components/Menu';
import Infos from '../src/components/Infos';

export default function Home() {

  return (
    <div style={{ display: "flex"}}>
      <Scripts />
      <Queries />
      <div>
        <Menu />
        <Infos />
      </div>
    </div>
  )
    
}
