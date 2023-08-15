import UpdateRead from '../components/UpdateRead';

//                                this is destructuring from the 'props'.
//             other way would be:(       props              ) , then do props.whateverKeyName
export default function ReadTable({books, handleDelete, handleUpdate}){

  //if you log props {handleDelete: function, handleUpdate: function, books: [{book},{book}]}

  //add props, adjust to use props and functions through these props
 // let books = props.books ---- this is one way to make a variable be a value... from props
  // console.log(books);

  return (
    <>
    <table className='container table table-read'>
        <thead>
          <tr className="read-row">
            <th></th>
            <th>Title</th>
            <th>Author</th>
            <th>Dates Read</th>
            <th>Rating</th>
            <th>Review</th>
          </tr >
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index} className="read-row">
              <td>
                <button className="btn btn-read" onClick={() => handleDelete(book.id) }>Delete</button>
                <UpdateRead book={book} handleUpdate={handleUpdate}/>
              </td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.date}</td>
              <td>{book.rating}</td>
              <td>{book.review}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
  )
}