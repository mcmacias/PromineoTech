//Using what you’ve learned this week, create a page of an application that enables 
//users to vote and leave reviews on movies.
//You should include at least the following components: 
// •	MovieList: a container for all the Movie components and their data.
// •	Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
// •	Stars: a one to five-star rating component that allows users to rate something 
//    (movies in this case, but remember that components are reusable, so you could use it 
//    elsewhere!)
// •	ReviewList: a container inside of a Movie that houses Review components.
// •	Review: A text review a user can leave on a movie.
// •	ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews.
//    When submitted, the review should be added to the movie. All this data can be stored in 
//    an array, no networking or database needed for this assignment.

import React from "react";
import "./Movie.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReviewForm from "./ReviewForm";
import Review from "./Review";

export default class MovieList extends React.Component{
  constructor(props){
    super(props);
    this.movieArray = props.movies;

    this.state = {
      showReview: false
    }
    // console.log(this.movieArray);
    // this.makeReview = this.makeReview.bind(this);
  }

  handleShowReview = () => {
    this.setState({
      ...this.state,
      showReview: !this.state.showReview
    })
  }

  showReviews = (e) => {
    console.log("make review");
    //connect review list 
    // <Review reviews={review list chosen}/>
  }
  //tried as a class, maybe try as a function 
  // https://upmostly.com/tutorials/react-onclick-event-handling-with-examples

  render() {
    return (
      <div>
        {this.movieArray.map((movie, index) => (
        <div className="container card" key={index}>
          <img src={movie.photo} className="card-img-top" alt={movie.name}></img>
          <div className="card-body">
            <h5 className="movieName">{movie.name}</h5>
            <p className="synopsis">{movie.synopsis}</p>
            <p className="director">Director: {movie.director}</p>
            <p className="writer">Writers: {movie.writer}</p>
            <p className="rating">Overall Rating: {movie.rating}</p>
            <footer className="review-section">
              <button className="formBtn" onClick={this.handleShowReview}>
                Show / Hide Review
              </button>

              {
                !this.state.showReview ? <ReviewForm/> : <></>
                // if (showReview) {
                //   <ReviewForm/>
                // } else if (showReview) {
                //   <></>
                // }
              }

              <button className="reviewsBtn" onClick={this.showReviews}>
                List of Reviews
              </button>
            </footer>
          </div>
        </div>
        ))}
      </div>
    );
  }
}

//add a card footer for the button to leave a review and see reviews it already has





//class based: class MovieList extends React.component {
//   constructor(props){
//     super(props)
//   }

// render(
//   return(
//     <>
//     </>
//   )
// )
// }

/*

  constructor(props){
    super(props);
    this.movieArray = props.movies;

    this.state = {
      showReview: false
    }
    // console.log(this.movieArray);
    // this.makeReview = this.makeReview.bind(this);
  }

  */

//functional: function MovieList () {
//
//   return(
//     <>
//     </>
//   )
// }

// const [movieArray, setMovieArray] = useState(props.movies);
// const [showReview, setShowReview] = useState(false)