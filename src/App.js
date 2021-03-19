import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Reset from './components/Reset'
import Dashboard from './components/Dashboard'
import Userfront from "@userfront/react";

Userfront.init(process.env.REACT_APP_trialid);

function App() {
    return (
    <Router>
    <div className="App">
          {/* <h4>checking</h4> */}
         <nav>
              <button>
                  <Link to="/">Home</Link>
              </button>
              <button>
                  <Link to="/login">Login</Link>
                    </button>
              <button>
                  <Link to="/reset">Reset</Link>
              </button>
              <button>
                  <Link to="/dashboard">Dashboard</Link>
              </button>
          </nav>

       
            <Switch>
                 <Route path="/login">
                    <Login />
                </Route>
                 <Route path="/reset">
                    <Reset />
                    </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
     </div>
    </Router>
    )       
}

export default App;
