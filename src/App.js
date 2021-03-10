import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
    <Router>
    <div className="App">
          {/* <h4>checking</h4> */}
          <nav>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/login">Login</Link>
                    </li>
              <li>
                  <Link to="/reset">Reset</Link>
              </li>
          </nav>

       
            <Switch>
                 <Route path="/login">
                    <Login />
                </Route>
                 <Route path="/reset">
                    <Reset />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
     </div>
    </Router>
    )
    
    function Home() {
        return <h2>home</h2>;
    }
        
    function Login() {
        return <h2>login</h2>;
    }
        
    function Reset() {
        return <h2>reset</h2>;
    }
}

export default App;
