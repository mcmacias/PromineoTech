//Page that will display TBR
//each book it's own card
import React, { useEffect, useState } from 'react';
import NewTBR from '../components/NewTBR';
import TBRTable from '../components/TBRTable';
import TBRIntro from '../components/TBRInto';

const TBR_URL = `https://64c5aeebc853c26efadaea42.mockapi.io/PTF/TBRBooks`;

export default function TBR(){
  const[tbrBooks, setTbrBooks] = useState([]);

  function getTbr(){
    fetch(TBR_URL)
      .then(data => data.json())
      .then(data => setTbrBooks(data))
  }
  useEffect(() => {
    getTbr();
  }, [])

  function deleteTbr(id){
    fetch(`${TBR_URL}/${id}`, {
      method: 'DELETE'
    }).then(() => getTbr());
  }

  function newTbr(e, newTbrInfo){
    e.preventDefault();

    fetch(`${TBR_URL}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        ...newTbrInfo, 
        title: newTbrInfo.title,
        author: newTbrInfo.author,
        reason1: newTbrInfo.reason1,
        reason2: newTbrInfo.reason2,
        reason3: newTbrInfo.reason3,
        series: newTbrInfo.series,
      })
    }).then(() => getTbr())
  }

  function updateTbr(e, updateTbrInfo){
    e.preventDefault()

    fetch(`${TBR_URL}/${updateTbrInfo.id}`, {
      method: 'PUT', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateTbrInfo)
    }).then(() => getTbr());
  }

  return(
    <div className='tbr-page'>
      <TBRIntro/>
      <NewTBR newTbr={newTbr}/>
      <TBRTable tbrBooks={tbrBooks} deleteTbr={deleteTbr} updateTbr={updateTbr}/>
    </div>
  )
}


