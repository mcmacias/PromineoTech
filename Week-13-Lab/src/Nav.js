import React, {Component} from "react";

export default class NavBar extends React.Component{
    render(){
        return ( 
        <nav className="navBar">
            <ul>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
        )
    };
}