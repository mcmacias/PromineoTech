//form that pops out to add new book to tbr list 
//title, author, 3 reasons to read, series?

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function NewTBR() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add to TBR
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Book to TBR</Modal.Title>
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
              <Form.Label>Reason 1 to read</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reason 2</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reason 3</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Series?</Form.Label>
              <Form.Control placeholder="Yes/No" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {/* change on click to add to tbr books */}
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewTBR;