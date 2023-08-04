//page that will display read books
//Title, author, Dates read, star rating, mini review
//get of read list
import { useState, useEffect } from "react";

const READ_URL = `https://64c5aeebc853c26efadaea42.mockapi.io/PTF/ReadBooks`;
let readBooks = [];

export default function ReadBooks(props){

  const [booksRead, setBooksRead] = useState([]);

  useEffect(() => {
    fetch(READ_URL)
    .then(data => data.json())
    .then(data => {
      // console.log(data)
      setBooksRead(data);
      console.log(booksRead);
    });
  }, []);

  return(
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Dates Read</th>
          <th>Rating</th>
          <th>Review</th>
        </tr >
      </thead>
      <tbody>
        {booksRead.map((book, index) => {
          <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.date}</td>
            <td>{book.rating}</td>
            <td>{book.review}</td>
          </tr>
        })}
      </tbody>
    </table>
  );
}
