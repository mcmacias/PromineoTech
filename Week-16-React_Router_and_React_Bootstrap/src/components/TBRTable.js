import UpdateTBR from "./UpdateTBR";

export default function TBRTable ({tbrBooks, deleteTbr, updateTbr}){
  
  return (
    <>
      <table className='container table table-tbr'>
        <thead className="tbr-heading">
          <tr className="tbr-row">
            <th></th>
            <th>Title</th>
            <th>Author</th>
            <th>Reasons to Read</th>
            <th>Series?</th>
          </tr >
        </thead>
        <tbody>
          {tbrBooks.map((books, index) => (
            <tr key={index} className="tbr-row">
              <td>
                <button className="btn btn-tbr" onClick={() => deleteTbr(books.id)}> Delete </button>
                <UpdateTBR book={books} updateTbr={updateTbr}/>
              </td>
              <td>{books.title}</td>
              <td>{books.author}</td>
              <td>{books.reason1}<br/>{books.reason2}<br/>{books.reason3}</td>
              <td>{books.series}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}