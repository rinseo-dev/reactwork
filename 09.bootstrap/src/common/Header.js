import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
export default function Header(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <div className="header">
                <img src="http://addinedu.com/theme/basic/img/logo.png"/>
                <h2>AddInEdu</h2>
                <div>
                    <button>회원가입</button>
                    <button onClick={handleShow}>로그인</button>
                </div>
            </div>
            { show && <Login show={show} handleClose={handleClose}/> }{/*조건부 렌더링*/}
            {/*모달코드를 여기에 작성했을때 됐는데 왜 안되는거여*/}
        </>
    )
}

function Login({show, handleClose}){
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>LOGIN</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>ID</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="ID를 입력해주세요"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>PASSWORD</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="PASSWORD를 입력해주세요"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    CLOSE
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    )
}


