import { useState } from 'react';
import './Common.css';
import hLogo from './logo.png';
import { Button, Modal, Form } from 'react-bootstrap';

function Header() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);


    return(
        <header id="header">
            <img src={hLogo} className='slogo'/>
            <h1>AddInEdu</h1>
            <div className='hlogin'>
                <Button variant="outline-secondary" size="sm">회원가입</Button>{' '}
                <Button variant="outline-success" size="sm" onClick={handleShow} >로그인</Button>{' '}
            </div>
            <Login show={show} handleClose={handleClose} />
        </header>
    )
}

function Login({show, handleClose}) {
    return(
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default Header;