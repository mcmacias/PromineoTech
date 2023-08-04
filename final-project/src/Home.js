//Home page setup, include nav bar & links to Read & Tbr in body
//app that will run everything in index.js
import './Home.css';
import NavBar from './NavBar.js';
import ReadBooks from './ReadBooks.js';
import TBR from './TBR.js'

function Home (){
  return(
    <div>
      {/* <NavBar/> */}
      <h1>Book Tracker</h1>
      <div className='container'>
        {/* make these photo links and on click goes to this page  */}
        <ReadBooks/>
        {/* <TBR/> */}
      </div>
    </div>
  )

}

export default Home;