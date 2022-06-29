import React from 'react'
import ReactDom from 'react-dom'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import "./modal.scss"


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}


export default function Modal({ open, children, onClose }) {
    if (!open) return null

    return ReactDom.createPortal(
      <>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
          <Form>
            <h2>Create Your own</h2>
            <h4>Name:</h4>
            <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                Enter playlist name
              </InputGroup.Text>
              <Form.Control id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <Button
              className="button-modal-close float-end"
              type="submit"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button className="button-modal-subment float-end" type="submit">
              Create
            </Button>
          </Form>
        </div>
      </>,
      document.body
    );
}