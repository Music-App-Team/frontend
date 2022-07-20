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
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Song Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="Length">
                            <Form.Label>Length (sec)</Form.Label>
                            <Form.Control type="number" placeholder="123" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="album">
                            <Form.Label>Album</Form.Label>
                            <Form.Control type="text" placeholder="Enter Album Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="Length">
                            <Form.Label>Artist</Form.Label>
                            <Form.Control type="text" placeholder="Enter Artest Name" />
                        </Form.Group>
                    </Row>
                    <Row className="col-md-6 mb-3">
                        <Form.Group as={Col} controlId="language" atr="language">
                            <Form.Label>Language</Form.Label>
                            <Form.Select defaultValue="language">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Choose files </Form.Label>
                        <Form.Control type="file" multiple />
                    </Form.Group>
                    <h4>OR</h4>
                    <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">
                            https://example.com/users/
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>
                    <Button className="button-modal-close float-end"  type="submit" onClick={onClose}>
                        close
                    </Button>
                    <Button className="button-modal-subment float-end" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>,
        document.body
    )
}