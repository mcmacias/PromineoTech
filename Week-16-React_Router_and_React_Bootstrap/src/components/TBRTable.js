import { useState, useEffect } from "react";
import UpdateTBR from "./UpdateTBR";

const TBR_URL = `https://64c5aeebc853c26efadaea42.mockapi.io/PTF/TBRBooks`;

export default function TBRTable (){
  const [booksTBR, setBooksTBR] = useState([]);

  function getTbr(){
    fetch(TBR_URL)
    .then(data => data.json())
    .then(data => {
      setBooksTBR(data)
    });
  }

  useEffect(() => {
    getTbr();
  }, []);

  function handleDelete(id){
    fetch(`${TBR_URL}/${id}`, {
      method: 'DELETE'
    }).then(() => getTbr());
  }

  function handleMakeChanges(){
    return(
      <UpdateTBR />
    )
  }
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Author</th>
            <th>Reasons to Read</th>
            <th>Series?</th>
          </tr >
        </thead>
        <tbody>
          {booksTBR.map((books, index) => (
            <tr key={index}>
              <td>
                <button onClick={() => handleDelete(books.id)}>Delete</button>
                <button onClick={() => handleMakeChanges()}>Update</button>
              </td>
              <td>{books.title}</td>
              <td>{books.author}</td>
              <td>{books.reason1}<br/>{books.reason2}<br/>{books.reason3}</td>
              <td>{books.series}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}