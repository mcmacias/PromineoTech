import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const READ_URL = `https://64c5aeebc853c26efadaea42.mockapi.io/PTF/ReadBooks`;

function UpdateRead(props) {
  let book = props.book;
  console.log(book);
  let id = book.id;
  // console.log(id)
  const [booksRead, setBooks] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updatedTitle, setUpdatedTitle] = useState('')
  const [updatedAuthor, setUpdatedAuthor] = useState('')
  const [updatedDate, setUpdatedDate] = useState('')
  const [updatedRating, setUpdatedRating] = useState('')
  const [updatedReview, setUpdatedReview] = useState('')

  useEffect(() => {
    setUpdatedTitle(book.title);
    setUpdatedAuthor(book.author);
    setUpdatedDate(book.date);
    setUpdatedRating(book.rating);
    setUpdatedReview(book.review);
  }, []);  

  function getBooks(){
    fetch(READ_URL)
    .then(data => data.json())
    .then(data => {
      setBooks(data);
    });
  }
  useEffect(() => {
    getBooks();
  }, []);

  function handleUpdate(e, book){
    e.preventDefault()
    let updateReadObject = {
      ...book,
      title: updatedTitle,
      author: updatedAuthor, 
      date: updatedDate, 
      rating: updatedRating,
      review: updatedReview,
    }
    console.log(updatedTitle);
    console.log(book.title);

    fetch(`${READ_URL}/${book.id}`, {
      method: 'PUT',
      body: JSON.stringify(updateReadObject),
      headers: {'Content-Type':'application/json'}
    }).then(() => handleClose()).then(() => getBooks());
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Make Changes
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Adust this book info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control 
              autoFocus onChange={(e) => setUpdatedTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control autoFocus onChange={(e) => setUpdatedAuthor(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date Read</Form.Label>
              <Form.Control autoFocus onChange={(e) => setUpdatedDate(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Star Rating (out of 5)</Form.Label>
              <Form.Control autoFocus onChange={(e) => setUpdatedRating(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Review</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setUpdatedReview(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleUpdate(e, book)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateRead;