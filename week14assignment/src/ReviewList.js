// ReviewList: a container inside of a Movie that houses Review components.

//star Icon: <i class="bi bi-star"></i>

import React from "react";

let togoReviews = [
  {
    reviewerName: "John Smith",
    review: "togo Review 1",
    starRating: '5',
  },
  {
    reviewerName: "Jane Apple",
    review: "togo Review 2",
    starRating: '2',
  }
]

let gameReviews = [
  {
    reviewerName: "John Smith",
    review: "game Review 1",
    starRating: '5',
  },
  {
    reviewerName: "Jane Apple",
    review: "game Review 2",
    starRating: '2',
  }
]

let dragonReviews = [
  {
    reviewerName: "John Smith",
    review: "dragon Review 1",
    starRating: '5',
  }, {
    reviewerName: "Jane Apple",
    review: "dragon Review 2",
    starRating: '2',
  }
]

export default class ReviewList extends React.Component{
  //return the rigt array for movie
  render() {
    return "review list"
  };
}
