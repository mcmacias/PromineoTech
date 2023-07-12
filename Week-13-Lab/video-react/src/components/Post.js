import React from "react";
import LikeButton from "./LikeButton";
import ReplyBtn from "./ReplyBtn";
import Comment from "./Comment";

export default class Post extends React.Component{
    render () {
        return (
            <div className="card w-75">
                <div className="card-header bg-success text-white">Username & Time</div>
                <div className="card-body">My post shows here</div>
                <div className="card-footer">
                    <LikeButton />
                    <span> </span>
                    <ReplyBtn />
                    <br></br>
                    <Comment />
                    <Comment />
                </div>
            </div>
        );
    };
}