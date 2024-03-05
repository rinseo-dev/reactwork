
import './App.css';
// import Button from 'react-bootstrap/Button'; // 이렇게 하면 button하나만 추가
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import logo from './logo.svg';
import Header from "./common/Header";
import Footer from "./common/Footer";
/*
react-bootstrap을 사용하려면 먼저 cdn을 index.html이나 index.js에 넣어주고
사용할 프로젝트에 npm install react-bootstrap bootstrap를 해줌
그런 뒤에 사용할 것들을 모두 import로 넣어주면 됨
import {Button, Navbar, Container, Nav} from 'react-bootstrap'; 이런 형식
*/


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
