import React from "react";
import './Project.css';
import NavBar from "./NavBar";
import LogInPage from "./LogIn";

export default class Project extends React.Component{
    render () {
        return( 
        <div className="Project">
            <NavBar/>
            <LogInPage/>
        </div>
        );
    };
}