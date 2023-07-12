import React from "react";
import Post from "./Post";

export default class NewsFeed extends React.Component {
    render() {
        return (
            <div className="container">
                <Post />
                <Post />
                <Post />
            </div>
        );
    };
}