//Page that will display TBR
//each book it's own card
import React from 'react';
import NewTBR from '../components/NewTBR';
import TBRTable from '../components/TBRTable';
import TBRIntro from '../components/TBRInto';

// const TBR_URL = `https://64c5aeebc853c26efadaea42.mockapi.io/PTF/TBRBooks`;

export default function TBR(props){
  return(
    <>
      <TBRIntro/>
      <NewTBR/>
      <TBRTable/>
    </>
  )
}


