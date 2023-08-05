// Review: A text review a user can leave on a movie.

//map through the array of reviews depending on what movie chosen 

import React from "react";

export default class Review extends React.Component{
  constructor(props){
    super(props);
    this.reviewArray = props.reviews;
  }

  render() {
    return "Review"
  };
}