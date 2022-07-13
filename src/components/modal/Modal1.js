import { Modal, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default function Modal1({ open, children, onClose, title, onSubmit,loading }) {
    return (
      <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary"  disabled={loading} onClick={onSubmit}>
            {loading ?  (
              <Spinner animation="border" size="sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : "Submit"}
          </Button>
        </Modal.Footer>
      </Modal>
    );
}