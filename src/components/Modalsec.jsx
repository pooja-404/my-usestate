import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modalsec() {
    const [show, setShow] = useState(false);
    const handleshow = (card) => {
        setShow(card);
    }
    return (
        <>
            <Container>
                {/* <Button onClick={handleShow} >
                    launch my modal
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header >
                        <Modal.Title className='fw-bold'> mew modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='fw-semibold'>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button  onClick={handleClose}>
                            Close
                        </Button>
                        <Button  onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal> */}
                <div onClick={() => handleshow('card')} className={`${show === "card" ? "d-block" : " d-none"} modal-card d-flex justify-content-center flex-column align-items-center`}>
                    <h1>my-modal</h1>
                    <h2>mew modal</h2>
                    <p className='fw-bold'>Woohoo, you are reading this text in a modal!</p>
                    <button  className='bg-green text-white p-3 fs-36 '>
                        close
                    </button>
                </div>
                <button onClick={() => handleshow('card')} className={`${show === "card" ? "d-none" : " d-block"} bg-green text-white p-3 fs-36 `}>
                    launch my modalm
                </button>
            </Container>
        </>
    );
}
export default Modalsec;



