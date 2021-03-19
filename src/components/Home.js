import { Component } from 'react';
import Userfront from "@userfront/react";
import { Route, Redirect } from "react-router-dom";

const SignupForm = Userfront.build({
  toolId: "bmakal"
});

export default class Home extends Component {

    render()
    {
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
                        <div className="card-1">
                            <h2>home</h2>
                        </div>
                        <SignupForm />
                    </div>
                );

            }
        }

            return <Route render={loggedin} />;

    }
}
