import {React, Component } from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import GoogleMap from "./components/GoogleMap"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route Path="/">
            <GoogleMap/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App