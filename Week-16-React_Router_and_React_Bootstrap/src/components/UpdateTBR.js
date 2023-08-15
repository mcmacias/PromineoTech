import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function UpdateTbr({book, updateTbr}) {
  //set props, should just be one book

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updatedTitle, setUpdatedTitle] = useState(book.title)
  const [updatedAuthor, setUpdatedAuthor] = useState(book.author)
  const [updatedReason1, setUpdatedReason1] = useState(book.reason1)
  const [updatedReason2, setUpdatedReason2] = useState(book.reason2)
  const [updatedReason3, setUpdatedReason3] = useState(book.reason3)
  const [updatedSeries, setUpdatedSeries] = useState(book.series)

  const updatedTbrData = {
    title: updatedTitle,
    author: updatedAuthor,
    reason1: updatedReason1,
    reason2: updatedReason2,
    reason3: updatedReason3,
    series: updatedSeries,
    id: book.id,
  };

  const handleButtonClick = (e) => {
    updateTbr(e, updatedTbrData);  // Call the first function
    handleClose(); // Call the second function
  }

  return (
    <>
      <Button variant='btn btn-tbr' onClick={handleShow}>
        Update
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
              <Form.Label>Reason 1 to read</Form.Label>
              <Form.Control value={updatedReason1}
              as="textarea" rows={2} onChange={(e) => setUpdatedReason1(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reason 2</Form.Label>
              <Form.Control value={updatedReason2}
              as="textarea" rows={2} onChange={(e) => setUpdatedReason2(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reason 3</Form.Label>
              <Form.Control value={updatedReason3}
              as="textarea" rows={2} onChange={(e) => setUpdatedReason3(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Series?</Form.Label>
              <Form.Control value={updatedSeries}
              autoFocus onChange={(e) => setUpdatedSeries(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="btn btn-tbr" onClick={(e) => handleButtonClick(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateTbr;