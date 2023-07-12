import React from "react";
import LikeButton from "./LikeButton";
import ReplyBtn from "./ReplyBtn";

export default class Comment extends React.Component {
    render () {
        return (
            <div className="card w-75">
                <div className="card-header bg-success text-white">Username & Time</div>
                <div className="card-body">Comments go here</div>
                <div className="card-footer bg-warning">
                    <LikeButton />
                    <span> </span>
                    <ReplyBtn />
                </div>
            </div>
        );
    };
}