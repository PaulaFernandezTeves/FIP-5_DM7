import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home/Home'
import Appbar from './components/AppBar'
import IniciarSesion from './components/IniciarSesion/IniciarSesion'

function App() {
  return (
    <Router>
      <Appbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/IniciarSesion" component={IniciarSesion}/>

      </Switch>
    </Router>

);
}

export default App;
