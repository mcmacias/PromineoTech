//page that will display read book
import React from 'react';
import NewRead from '../components/NewRead';
import ReadTable from '../components/ReadTable';
import ReadIntro from '../components/ReadIntro';

// const READ_URL = `https://64c5aeebc853c26efadaea42.mockapi.io/PTF/ReadBooks`;

export default function ReadBooks(props){

  return(
    <>
      <ReadIntro/>
      <NewRead/>
      <ReadTable/>
    </>
  );
}
