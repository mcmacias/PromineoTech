//form that pops out to add new book to tbr list 
//title, author, 3 reasons to read, series?

import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const TBR_URL = `https://64c5aeebc853c26efadaea42.mockapi.io/PTF/TBRBooks`;

function NewTBR() {
  const [booksTBR, setBooksTBR] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newReason1, setNewReason1] = useState('')
  const [newReason2, setNewReason2] = useState('')
  const [newReason3, setNewReason3] = useState('') 
  const [newSeries, setNewSeries] = useState('')  

  function getTbr(){
    fetch(TBR_URL)
    .then(data => data.json())
    .then(data => {
      setBooksTBR(data)
    });
  }

  useEffect(() => {
    getTbr();
  }, []);

  function newTBRBook(e){
    e.preventDefault();
    fetch(`${TBR_URL}`, {
      method: 'POST', 
      headers:{'Content-Type': "application/json"},
      body: JSON.stringify({
        title: newTitle,
        author: newAuthor,
        reason1: newReason1,
        reason2: newReason2,
        reason3: newReason3,
        series: newSeries,
      })
    }).then(() => getTbr()).then(() => handleClose())
  }
  //getTbr isn't wokring after adding, but handleClose is

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
              <Form.Control autoFocus onChange={(e) => setNewTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control autoFocus onChange={(e) => setNewAuthor(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reason 1 to read</Form.Label>
              <Form.Control as="textarea" rows={2} onChange={(e) => setNewReason1(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reason 2</Form.Label>
              <Form.Control as="textarea" rows={2} onChange={(e) => setNewReason2(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reason 3</Form.Label>
              <Form.Control as="textarea" rows={2} onChange={(e) => setNewReason3(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Series?</Form.Label>
              <Form.Control placeholder="Yes/No" autoFocus onChange={(e) => setNewSeries(e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => newTBRBook(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewTBR;