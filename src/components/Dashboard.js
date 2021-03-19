import { Component } from 'react';
import Userfront from "@userfront/react";
import { Route, Redirect } from "react-router-dom";

export default class Dashboard extends Component {
    render() {
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
                    <div className="card-3">
                        <h2>DASHBOARD</h2>
                        <h4>logged in</h4>
                    </div>
                    <pre>{data}</pre>
                    <button onClick={Userfront.logout}>Logout</button>
                </div>
            );
            
        }
        

        return <Route render={checking} />;
    }
}
