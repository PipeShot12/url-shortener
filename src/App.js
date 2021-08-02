import './App.css'
import UrlShortenerApp from './urlShortenerApp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App () {
  return (
    <Router>
      <Switch>
        <Route path='/*' component={UrlShortenerApp} />
      </Switch>
    </Router>

  )
}

export default App
