import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './routes/Home.js'
import Read from './routes/Read.js'
import TBR from './routes/TBR.js'

export default function App() {

  return (
    <div>
    <Router>
      {/* This is your Nav element, that users can see. */}
      <div>
       <nav className='nav'> 
          <ul className='list'>
            <li className='li'>
              <Link to="/">Home</Link>
            </li>
            <li className='li'>
              <Link to="/read">Read Books</Link>
            </li>
            <li className='li'>
              <Link to="/tbr">TBR</Link>
            </li>
          </ul>
        </nav>

        {/* This is the logic that switches each path.
          1. Give your Route component a path attribute so users know where they are.
              This is linked directly with "to attribute" on your nav above.
          2. Inside that Route component, render the component you want users
              to see when they click on that route.
          <Route path="/">
            <Component/>
          </Route>  */}

        <Switch>
          <Route path="/tbr">
            <TBR />
          </Route>

          <Route path="/read">
            <Read />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
    </div>
  )
}
