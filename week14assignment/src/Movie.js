// Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)

import React from "react";
import MovieList from "./MovieList";
import togo from "./Images/togo.jpg";
import perfectGame from "./Images/thePerfectGame.jpg";
import trainDragon from"./Images/httyd.jpg";

let movieList = [
  {
    name: "The Perfect Game",
    photo: perfectGame,
    synopsis: "Based on a true story, a group of boys from Monterrey, Mexico who became the first non-U.S. team to win the Little League World Series.",
    rating: "3.5",
    director: "William Dear",
    writer: "W. William Winokur",
  },
  {
    name: "Togo",
    photo: togo,
    synopsis: "The story of Togo, the sled dog who led the 1925 serum run despite being considered too small and weak to lead such an intense race.",
    rating: "4",
    director: "Ericson Core",
    writer: "Tom Flynn",
  },
  {
    name: "How to Train Your Dragon",
    photo: trainDragon,
    synopsis: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
    rating: "4",
    director: "Dean DeBlois, Chris Sanders",
    writer: "Will Davis, Dean DeBlois, Chris Sanders",
  }
]

export default class Movie extends React.Component{

  render (){
    return (
      <div>
        <MovieList movies={movieList} />
      </div>
    )
  };
}