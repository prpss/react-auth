import { Component } from 'react';
import Userfront from "@userfront/react";

const LoginForm = Userfront.build({
  toolId: "ldlrlk"
});


export default class Login extends Component
{
    render() {
        return (
            <div>
                <div className="card-2">
                     <h2>login</h2>
                </div>
                <LoginForm />
            </div>
        );
    }
 }
