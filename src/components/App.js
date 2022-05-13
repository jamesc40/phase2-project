import { useState, useEffect } from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import TrailList from './TrailList'
import RenderTrail from './RenderTrail'
import Form from './Form'

export const URL = 'http://localhost:3000/trails'

function App() {
  const [trails, setTrails] = useState([])
  let { pathname } = useLocation();

  useEffect(() => {
   fetch(URL)
   .then(r => r.json())
   .then(data => setTrails(data))
  }, [])

  const handleSetTrails = (obj) => setTrails([...trails, obj])

  return (
    <div className="App">
      {pathname !== '/home' ? <NavBar /> : null} 
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/traillist'>
          <TrailList
            trails={ trails } 
          />
        </Route>
        <Route path='/traillist/:id'>
          <RenderTrail  />
        </Route>

        <Route path='/form'>
          <Form handleSetTrails={handleSetTrails}/>
        </Route>
        <Redirect exact from='/' to='/home'/>
      </Switch>
    </div>
  );
}

export default App;
