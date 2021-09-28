import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import Home from './pages/Home';
import Home from './pages/home/Home';
import Qualification from './pages/qualification/Qualification';
import Projects from './pages/projects/Projects';
import Experience from './pages/experience/Experience';
import Contact from './pages/contact/Contact';

function App() {
  // Navbar with react-router-dom
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/qualification' exact component={Qualification} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/experience' exact component={Experience} />
        <Route path='/contact' exact component={Contact} />

      </Switch>
    </Router>
    </>
  );
}

export default App;
