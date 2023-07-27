// ReviewList: a container inside of a Movie that houses Review components.

//star Icon: <i class="bi bi-star"></i>

import React from "react";

let togoReviews = [
  {
    reviewerName: "John Smith",
    review: "Great movie. Would watch again.",
    starRating: '5',
  },
  {
    reviewerName: "Jane Apple",
    review: "Too silly for me.",
    starRating: '2',
  }
]

let gameReviews = [
  {
    reviewerName: "John Smith",
    review: "Great movie. Would watch again.",
    starRating: '5',
  },
  {
    reviewerName: "Jane Apple",
    review: "Too silly for me.",
    starRating: '2',
  }
]

let dragonReviews = [
  {
    reviewerName: "John Smith",
    review: "Great movie. Would watch again.",
    starRating: '5',
  },
  {
    reviewerName: "Jane Apple",
    review: "Too silly for me.",
    starRating: '2',
  }
]

export default class ReviewList extends React.Component{
  render() {
    return "review list"
  };
}