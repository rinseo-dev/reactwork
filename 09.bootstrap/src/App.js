
import './App.css';
// import Button from 'react-bootstrap/Button'; // 이렇게 하면 button하나만 추가
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import logo from './logo.svg';
import Header from "./common/Header";
import Footer from "./common/Footer";


function App() {
  return (
    <div className="App">
        {/*
        부트스트랩 사용시
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Button variant="warning">Warning</Button>{' '}*/}

        <Header/>
        <section>
            <img src={logo} className='App-logo' alt='logo'/>
        </section>
        <Footer/>

    </div>
  );
}

export default App;
