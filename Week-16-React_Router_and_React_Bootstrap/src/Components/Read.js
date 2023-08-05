//page that will display read book
import React from 'react';
import { useState, useEffect } from "react";

const READ_URL = `https://64c5aeebc853c26efadaea42.mockapi.io/PTF/ReadBooks`;
// let booksRead = [];

export default function ReadBooks(props){

  const [booksRead, setBooks] = useState(([]));

  useEffect(() => {
    fetch(READ_URL)
    .then(data => data.json())
    .then(data => {
      setBooks(data);
      // console.log(data);
      // console.log(booksRead);
    });
  }, []);

  return(
    <>
      {/* add button to add NewRead */}
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Author</th>
            <th>Dates Read</th>
            <th>Rating</th>
            <th>Review</th>
          </tr >
        </thead>
        <tbody>
          {booksRead.map((book, index) => (
            <tr key={index}>
              <td>
                <button>Delete</button>
                {/* connect delete  */}
                <button>Make Changes</button>
              </td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.date}</td>
              <td>{book.rating}</td>
              <td>{book.review}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}



