import { useEffect, useRef, useState } from 'react'
import { useLocation, Redirect, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import TrailList from './TrailList'
import RenderTrail from './RenderTrail' 
import Form from './Form'
import Home from './Home'

export const URL = 'http://localhost:3000/trails'

function App() { 
  const [trails, setTrails] = useState([])
  const history = useRef();

  history.current = useLocation().pathname;

  useEffect(() => {
    fetch(URL)
    .then(r => r.json())
    .then(data => setTrails(data))
  }, [])

  const handleSetTrails = (obj) => setTrails([...trails, obj])

  return (
    <div className="App">
      {history.current !== '/home' ? <NavBar /> : null}
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/traillist'>
          <TrailList
            trails={trails} 
          />
        </Route>
        <Route path='/traillist/:id'>
          <RenderTrail  />
        </Route>
        <Route path='/form'>
          <Form handleSetTrails={handleSetTrails}/>
        </Route>
        <Redirect to='/home'/>
      </Switch>
    </div>
  );
}

export default App;
