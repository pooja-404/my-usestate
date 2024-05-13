import { useState } from "react";
import Button from "react-bootstrap/Button";

function Section2() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="pt-5 ">
                <p>You clicked {count} times</p>
                <Button onClick={() => setCount(count - 1)} className="me-4">
                    add me
                </Button>
                <Button onClick={() => setCount(count + 1)}>
                    sub me
                </Button>
            </div>
        </>
    );

}
export default Section2;
{/* <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Do not even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal> */}