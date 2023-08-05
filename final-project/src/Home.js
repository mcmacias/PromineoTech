//Home page setup, include nav bar & links to Read & Tbr in body
//app that will run everything in index.js
import './Home.css';
// import NewTBR from './NewTBR';
import ReadBooks from './ReadBooks.js';
// import TBR from './TBR.js'

function Home (){
  return(
    <div>
      <h1>Book Tracker</h1>
      <div className='container'>
        {/* make these photo links and on click goes to this page  */}
        <ReadBooks/>
        {/* button for newRead */}
        {/* <TBR/> */}
        {/* button for newTbr  */}
      </div>
    </div>
  )

}

export default Home;