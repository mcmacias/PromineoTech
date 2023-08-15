// import amz.jpg from'./images'
// import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { Link } from "react-router-dom"



export default function HomeWelcome() {
  return (
    <div>
      <div className="container home-intro">
        <h1>Book Tracker 2023</h1>
        <p>On this platform, I have established a comprehensive system for cataloging the books 
          I have read, in addition to curating a list of titles that constitute my "To Be Read" (TBR) selection. 
        </p>
      </div>
      <div className="container resources">
        <h1>Below are some sites to get books from</h1>    
        <div className="container amazon">
          <h2>Amazon/Kindle</h2>
          <a href="https://www.amazon.com/b/?node=283155&tag=googhydr-20&hvadid=381655816687&hvpos=&hvexid=&hvnetw=g&hvrand=11071536193531943753&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031478&hvtargid=kwd-28771621&ref=pd_sl_15u94xc3ql_e">
            <img src={require('./images/amazon.jpg')}/>
          </a>
          <p>With the Kindle App, you have the opportunity to access an array of literary offerings 
            available Through Amazon's platform. While some titles can be obtained at no cost or for a small 
            fee of $1, it's important to note that a majority of the collection require a purchase. Within this 
            platform, the availability encompasses various formats including physical books, eBooks, and audiobooks, 
            catering to your preferred mode of consumption, whenever applicable.
          </p>
        </div>
        <div className="container libby">
          <h2>Libby</h2>
          <a href="https://libbyapp.com/interview/welcome#doYouHaveACard">
            <img src={require('./images/lby.png')}/>
          </a>
          <p>Using the Libby App, a Library Card is a required. However, it's worth noting that in response to the 
            COVID pandemic, numerous public libraries have extended their services to encompass digital library cards, 
            which seamlessly integrate with the Libby App. This platform exclusively facilitates the acquisition of 
            eBooks and audiobooks, subject to availability within your library's catalog. 
          </p>
        </div>
        <div className="container book-outlet">
          <h2>Book Oulet</h2>
          <a href="https://bookoutlet.com/loyalty/referral/AgR4gfwD?c=url">
            <img src={require('./images/bo.png')}/>
          </a>
          <p>If your focus primarily revolves around purchasing physical books, I recommend considering the 
            Book Outlet—an exceptional online platform. Along with it's extensive collection, Book Outlet presents 
            a number of attractive discounts and frequent promotional events. It's pertinent to note that this 
            platform is mainly for the purchasing of physical books, catering to people seeking to enrich their 
            personal libraries.
          </p>
        </div>
        </div>
    </div>
  )
}
