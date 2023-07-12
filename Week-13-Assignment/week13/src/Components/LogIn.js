import React from "react";

export default class LogInPage extends React.Component{
    render () {
        return (
            <div className="container">
                <h3>Log In</h3>
                <form>
                    <label>Username<br></br>
                        <input name="username" />
                    </label>
                    <br></br>
                    <label>Password<br></br>
                        <input name="password" />
                    </label>
                </form>
            </div>
        );
    };
}