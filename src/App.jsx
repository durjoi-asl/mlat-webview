import {React, Component } from "react"
import Logo from './logo.png'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import GoogleMap from "./components/GoogleMap"
import AircraftsList from "./components/AircraftsList"
import Login from "./components/Login"

class App extends Component {
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <header style={{ height: '60px', width: '100%', color: '#ffffff', background: 'rgb(0 0 0 / 59%)', borderBottom: '1px solid #000', position: 'fixed', top: '0px', left:'0px', zIndex: '999' }}>
                    <div style={{ paddingLeft: '20px', width: '15%', float: 'left' }}>
                        <img src={ Logo } style={{ height: "40px", display: 'inline-block', marginTop: '5px' }} alt="ASL Logo"/>
                    </div>
                    <div style={{fontSize: '18px', fontWeight: '700',height:'100%', float: 'left', width: '40%', textAlign: 'left' }}>
                        <a href="/aircraftslist" style={{lineHeight: '60px', color: '#fff', fontSize: '16px', textDecoration: 'none'}}>Aircrafts List</a>
                        <a href="/" style={{lineHeight: '60px', color: '#fff', fontSize: '16px', textDecoration: 'none', marginLeft: '20px'}}>2D Map</a>
                    </div>
                    <div style={{fontSize: '18px', fontWeight: '700',height:'100%', float: 'right', width: '20%', textAlign: 'right', paddingRight: '20px' }}>
                        <a href="/login" style={{lineHeight: '60px', color: '#fff', fontSize: '16px', textDecoration: 'none'}}>Login</a>
                    </div>
                </header>

                  <Router>
                    <Switch>
                    
                      <Route exact path="/" component={GoogleMap} key={1} />
                      <Route exact path="/aircraftslist" component={AircraftsList} key={2}/>
                      <Route exact path="/login" component={Login} key={3} />
                    </Switch>
                  </Router>
                

                <footer style={{ position: 'fixed', bottom: '0px', left: '0px', height: '30px', lineHeight: '30px', fontSize: '14px', textAlign: 'center', width: '100%', color: '#fff', background: 'rgba(0, 0, 0, 34%)' }}>
                    Copywright @ ASL Systems Ltd.
                </footer>
                
          </div>
      
    )
  }
}

export default App