import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import TrailList from './TrailList'
import RenderTrail from './RenderTrail' 
import Form from './Form'
import Home from './Home'

export const URL = 'http://localhost:3000/trails'

function App() { const [trails, setTrails] = useState([])
  
  useEffect(() => {
   fetch(URL)
   .then(r => r.json())
   .then(data => setTrails(data))
  }, [])

  const handleSetTrails = (obj) => setTrails([...trails, obj])

   return (
      <div className="App">
         <NavBar /> 
         <Switch>

            <Route exact path='/'>
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
            
         </Switch>
    </div>
  );
}

export default App;
