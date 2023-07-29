// ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. 
// When submitted, the review should be added to the movie. All this data can be stored in 
// an array, no networking or database needed for this assignment.

import React from "react";


export default class ReviewForm extends React.Component{
  // constructor(){
    
  // }

  render() {
    return (
      <div className="react-box container">
        <form>
          <label>Name: <br></br>
              <input name="reviewerName" />
          </label>
          <br></br>
          <label>5 Star Rating:<br></br>
              <input name="starRating" />
          </label>
          <br></br>
          <label>Review:<br></br>
              <textarea name="review"/>
          </label>
        </form>
      </div>
    )
  };
}