import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Userfront from "@userfront/react";

Userfront.init(process.env.REACT_APP_trialid);

const SignupForm = Userfront.build({
  toolId: "bmakal"
});

const LoginForm = Userfront.build({
  toolId: "ldlrlk"
});

const PasswordReset = Userfront.build({
    toolId: "nakmkk"
})

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
              <li>
                  <Link to="/dashboard">Dashboard</Link>
              </li>
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
    
    function Home() {

        function loggedin({location})
        {
            if (Userfront.accessToken())
            {
                return (
                    <Redirect to={{pathname: "/dashboard", state: {from: location}}}/>
                );
            }
            else
            {
                return (
                    <div>
                        <h2>home</h2>
                        <SignupForm />
                    </div>
                );

            }
        }

            return <Route render={loggedin} />;
    }
        
    function Login() {
        return (
            <div>
                <h2>login</h2>
                <LoginForm />
            </div>
        );
    }
        
    function Reset() {
        return (
            <div>
                <h2>reset</h2>
                <PasswordReset />
            </div>
        );
    }

    function Dashboard() {
        function checking({ location })
        {
            if (!Userfront.accessToken())
            {
                <h4>not logged in</h4>
                return (
                    <Redirect to={{ pathname: "/login", state: { from:  location  }}}/>
                )
            }

            const data = JSON.stringify(Userfront.user, null, 2);
            return (
                <div>
                    <h2>DASHBOARD</h2>
                    <h4>logged in</h4>
                    <pre>{data}</pre>
                    <button onClick={Userfront.logout}>Logout</button>
                </div>
            );
            
        }
        

        return <Route render={checking} />;
    }
}

export default App;
