//form that pops out to add a new book to list of books read
//Title, author, Dates read, star rating, mini review

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

// const READ_URL = `https://64c5aeebc853c26efadaea42.mockapi.io/PTF/ReadBooks`;

function NewRead(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newDate, setNewDate] = useState('')
  const [newRating, setNewRating] = useState('')
  const [newReview, setNewReview] = useState('')

  // console.log(newBook);

  const newBookData = {
    title: newTitle,
    author: newAuthor,
    date: newDate,
    rating: newRating,
    review: newReview,
  };

  // console.log(newBookData);

  const handleButtonClick = (e) => {
    props.newReadBook(e, newBookData);  // Call the first function
    handleClose(); // Call the second function
  }

  return (
    <>
      <div className='new-read'>
        <Button variant="btn btn-newRead" onClick={handleShow}>
          Add Read Book
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Antoher Read Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control autoFocus onChange={(e) => setNewTitle(e.target.value) }/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control autoFocus onChange={(e) => setNewAuthor(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date Read</Form.Label>
              <Form.Control autoFocus onChange={(e) => setNewDate(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Star Rating (out of 5)</Form.Label>
              <Form.Control autoFocus onChange={(e) => setNewRating(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Review</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setNewReview(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={(e) => props.newReadBook(e, newBookData)}>
            Save Changes
          </Button> */}
          <Button variant="btn btn-read" onClick={(e) => handleButtonClick(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewRead;