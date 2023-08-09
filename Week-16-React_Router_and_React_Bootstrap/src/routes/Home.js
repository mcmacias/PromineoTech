import HomeWelcome from "../components/HomeWelcome";
import HomeRecs from "../components/HomeRecs";
import '../App.css';


export default function Home() {
	return(
    <div className="home-page">
      <HomeWelcome/>
      <HomeRecs/>
    </div>
  )
	
}


