import React from 'react';
import Read from './Read.js'
// import TBR from './TBR.js'

export default function Home() {
	return(
    <div>
      <h1>Book Tracker</h1>
      <div className='container'>
        {/* make these photo links and on click goes to this page  */}
        <Read/>
        {/* button for newRead */}
        {/* <TBR/> */}
        {/* button for newTbr  */}
      </div>
    </div>
  )
	
}


