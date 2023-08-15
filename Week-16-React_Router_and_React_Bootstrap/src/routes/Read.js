//page that will display read book
import React, { useState, useEffect } from 'react';
import NewRead from '../components/NewRead';
import ReadTable from '../components/ReadTable';
import ReadIntro from '../components/ReadIntro';

const READ_URL = `https://64c5aeebc853c26efadaea42.mockapi.io/PTF/ReadBooks`;

export default function ReadBooks(){
  const [books, setBooks] = useState([]);

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
  
  function newReadBook(e, newBookInfo){
    e.preventDefault();

    fetch(`${READ_URL}`, {
      method: 'POST', 
      headers:{'Content-Type': "application/json"},
      body: JSON.stringify({
        ...newBookInfo,
        title: newBookInfo.title,
        author: newBookInfo.author,
        date: newBookInfo.date,
        rating: newBookInfo.rating,
        review: newBookInfo.review,
      })
    }).then(() => getBooks())
  }

  function handleUpdate(e, updateBookInfo){
    e.preventDefault()
    // let updateReadObject = {
    //   ...updateBookInfo
    // }

    fetch(`${READ_URL}/${updateBookInfo.id}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(updateBookInfo)
    }).then(() => getBooks());
  }

  return(
    <div className='read-page'>
      <ReadIntro/>
      <NewRead newReadBook={newReadBook}/>
      <ReadTable books={books} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    </div>
  );
}

//props.books, props.handleDelete, props.handleUpdate
//{books, handleDelete, handleUpdate}