//Page that will display TBR
//each book it's own card
import React from 'react';
import { useState, useEffect } from "react";

const TBR_URL = `https://64c5aeebc853c26efadaea42.mockapi.io/PTF/TBRBooks`;
// let booksTBR = [];

export default function TBR(props){
  

  const [booksTBR, setBooksTBR] = useState([]);

  useEffect(() => {
    fetch(TBR_URL)
    .then(data => data.json())
    .then(data => {
      // console.log(data);
      setBooksTBR(data);
      // console.log(data);
      // console.log(booksTBR);
    });
  }, []);

  return(
    <>
      {/* add button to add new tbr */}
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
            <tr>
              <td>
                <button>Delete</button>
                <button>Update</button>
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


