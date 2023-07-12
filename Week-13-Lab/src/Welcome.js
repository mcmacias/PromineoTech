import React, {Component} from "react";

let date = new Date()

let singleUser = {
  name: 'John',
  time: date.toDateString(),
}

export default class Welcome extends React.Component {
    render() {
        return (
            <section>
            <div>
                <h1>Welcome {singleUser.name}</h1>
                <p>Today's Date is {singleUser.time}</p>
            </div>
            </section>
        );
    };
}