//form that pops out to add a new book to list of books read
//Title, author, Dates read, star rating, mini review

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function NewRead() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Read Book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Antoher Read Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date Read</Form.Label>
              <Form.Control autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Star Rating (out of 5)</Form.Label>
              <Form.Control autoFocus />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Review</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {/* change on click to add to read books */}
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewRead;