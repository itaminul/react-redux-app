import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import browserHistory from 'history/createBrowserHistory'
import { Topnavbar } from './app/Topnavbar';
import { Footer } from './app/Footer'; 
import { Home } from './component/Home';
import { About } from './component/About';
import { Tutorial } from './component/Tutorial';
import { Blog } from './component/Blog';
import { Contact } from './component/Contact';
import { Dashboard } from './component/Dashboard';
function App() {
  return (
    <Router history={browserHistory}>
    <Topnavbar />
    
    <div className="App">
      <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/tutorial" component={Tutorial} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
      </Switch>   
    
    </div>
    <Footer />
    </Router>
  );
};




export default App;
