
export default function HomeWelcome() {
  return (
    <div>
      <div className="intro">
        <h1>Welcome to Macias Book Tracker TM</h1>
        <p>Here I can keep track of all the books I've read as well as keeping track of the books
          I will be keeping in my TBR. 
        </p>
      </div>
      <div>
        <h1>Here are some links to sites you can get books from</h1>    
        <div className="amazon">
          <h2>Amazon/Kindle</h2>
          <p>You can download the Kindle App and get books through Amazon. You can find some free 
            or $1 books that you can read through the app, although most of them you have to buy. 
            Here you can get a physical book, eBook, or audio book if they offer it. 
          </p>
          <p>Link to Amazon Books</p>
          {/* https://www.amazon.com/b/?node=283155&tag=googhydr-20&hvadid=381655816687&hvpos=&hvexid=&hvnetw=g&hvrand=11071536193531943753&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031478&hvtargid=kwd-28771621&ref=pd_sl_15u94xc3ql_e */}<br/>
        </div>
        <div className="libby">
          <h2>Libby</h2>
          <p>Through the Libby App you need a Library Card, although due to COVID there are 
            many public libraries that offer digital library cards that will workon the Libby App. 
            Here you can only get ebooks or audio books, and only if your library has it in their catalog. 
          </p>
          <p>Link to Libby App</p>
          {/* https://libbyapp.com/interview/welcome#doYouHaveACard */}
        </div>
        <div className="book-outlet">
          <h2>Book Oulet</h2>
          <p>If you are looking to just buying physical books Book Outlet is a grest site to use. They 
            offer a lot of discounts and have many sales. This site is mainly for physical books. 
          </p>
          <p>Link to Book Oulet</p>
          {/* https://bookoutlet.com/loyalty/referral/AgR4gfwD?c=url */}
        </div>
        </div>
    </div>
  )
}
