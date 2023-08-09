import UpdateRead from '../components/UpdateRead';
import { useState, useEffect } from "react";

const READ_URL = `https://64c5aeebc853c26efadaea42.mockapi.io/PTF/ReadBooks`;

export default function ReadTable(){
  const [booksRead, setBooks] = useState([]);
  function getBooks(){
    fetch(READ_URL)
      .then(data => data.json())
      .then(data => setBooks(data))
  }

  useEffect(() =>{
    getBooks();
  }, [])

  function handleDelete(id){
    fetch(`${READ_URL}/${id}`, {
      method: 'DELETE'
    }).then(() => getBooks());
  }

  function handleMakeChanges(){
    <UpdateRead />
  }

  return (
    <>
    <table className='table table-striped table-hover'>
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
                <button onClick={() => handleDelete(book.id) }>Delete</button>
                <button onClick={() => handleMakeChanges() }>Make Changes</button>
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
  )
}