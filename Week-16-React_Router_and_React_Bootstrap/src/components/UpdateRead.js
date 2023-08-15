import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function UpdateRead({book, handleUpdate}) {
  //set props, should just be one book

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //have updated start at the value 
  const [updatedTitle, setUpdatedTitle] = useState(book.title)
  const [updatedAuthor, setUpdatedAuthor] = useState(book.author)
  const [updatedDate, setUpdatedDate] = useState(book.date)
  const [updatedRating, setUpdatedRating] = useState(book.rating)
  const [updatedReview, setUpdatedReview] = useState(book.review)

  const updatedBookData = {
    title: updatedTitle,
    author: updatedAuthor,
    date: updatedDate,
    rating: updatedRating,
    review: updatedReview,
    id: book.id
  };

  const handleButtonClick = (e) => {
    handleUpdate(e, updatedBookData);  // Call the first function
    handleClose(); // Call the second function
  }

  return (
    <>
      <Button variant="btn btn-read" onClick={handleShow}>
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
              <Form.Control value={updatedTitle}
              autoFocus onChange={(e) => setUpdatedTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control value={updatedAuthor}
              autoFocus onChange={(e) => setUpdatedAuthor(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date Read</Form.Label>
              <Form.Control value={updatedDate}
              autoFocus onChange={(e) => setUpdatedDate(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Star Rating (out of 5)</Form.Label>
              <Form.Control value={updatedRating}
              autoFocus onChange={(e) => setUpdatedRating(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Review</Form.Label>
              <Form.Control value={updatedReview}
              as="textarea" rows={3} onChange={(e) => setUpdatedReview(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="btn btn-read" onClick={(e) => handleButtonClick(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateRead;