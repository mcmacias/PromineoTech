
export default function HomeRecs() {
  return (
    <div className="container recs">
      <h1>Good places to get Recommendations</h1>
      <div className="container goodreads">
        <h2>Goodreads</h2>
        <a href="https://www.goodreads.com/">
          <img src={require('./images/gr.png')}/>
        </a>
        <p>Many people use this as their review platform. It is also very helpful in giving book 
          information, from publish date, how many books in a series, to how long the book is (in terms 
          of pages). It is also a very simple site to use and allows you to create multiple lists of books,
          and these lists you can title as you want depending on your needs for those books. 
        </p>
      </div>
      <div className="container youtube">
        <h2>YouTube</h2>
        <p>A multitude of BookTubers actively engage in the reviews and recommendations. Here are a selection of 
          notable favorites:
        </p>
        <div className='row'>
          <div className='column'>
            <a href="https://www.youtube.com/@BookswithEmilyFox">
              <img src={require('./images/ef.jpg')}/>
              <p>Books with Emily Fox</p>
            </a>
          </div>
          <div className='column'>
            <a href="https://www.youtube.com/@thisstoryaintover">
              <img src={require('./images/tsao.jpg')}/>
              <p>This Story Ain't Over</p>
            </a>
          </div>
          <div className='column'>
            <a href="https://www.youtube.com/c/throneofpages">
              <img src={require('./images/thop.jpg')}/>
              <p>Throne of Pages</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
