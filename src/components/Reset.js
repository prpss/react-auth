import { Component } from 'react';
import Userfront from "@userfront/react";

const PasswordReset = Userfront.build({
    toolId: "nakmkk"
})

export default class Reset extends Component {
    render() {
        return (
            <div>
                <div className="card-2">
                    <h2>reset</h2>
                </div>
                <PasswordReset />
            </div>
        );
    }
}
