//page that will display read book
import { useState, useEffect } from "react";
import ReadURL from "./services/ReadURL";
import Delete from "./Delete";


const READ_URL = `https://64c5aeebc853c26efadaea42.mockapi.io/PTF/ReadBooks`;
const service = new ReadURL(READ_URL);

export default function ReadBooks(props){

  const [booksRead, setBooks] = useState(([]));

  useEffect(() => {
    service.getBooksRead().then(data => {
      setBooks(data);
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
                <button onClick={<Delete URL="READ_URL" id="index"/>}>Delete</button>
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
