import React, {useState} from 'react'
import { Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModalDelete(props) {
    const [modalShow, setModalShow] = useState(false);
  
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    const onYesClick = () => {
      props.onYesClick();
      handleClose();
    }

    return (
      <>
        <span onClick={handleShow} className="input-group-text" title="Delete"><FontAwesomeIcon icon={faTrash}/></span>
  
        <Modal show={modalShow} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Remove</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want to remove this item from the cart?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={onYesClick}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }