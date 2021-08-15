import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home'
import Appbar from './components/AppBar'


function App() {
  return (
    <Router>
      <Appbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>

);
}

export default App;
