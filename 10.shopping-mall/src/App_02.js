
import './App.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
/*
react-bootstrap을 사용하려면 먼저 cdn을 index.html이나 index.js에 넣어주고
사용할 프로젝트에 npm install react-bootstrap bootstrap를 해줌
그런 뒤에 사용할 것들을 모두 import로 넣어주면 됨
import {Button, Navbar, Container, Nav} from 'react-bootstrap'; 이런 형식
*/
import {useState} from "react";

// import cafe1 from '../public/img/cafe1.jpg';
/*
public으로 위치를 옮기면 import없이 사용 가능함
import cafe2 from './img/cafe2.jpg';
import cafe3 from './img/cafe3.jpg';
*/

// import Num from './data/BeverageList';
/*
   - export {num1,num2} 여러개 했을 때
     import할 때 export한 이름과 같아야 함
     ex) import{num1, num2}
 */
import cList, {num1,num2} from './data/BeverageList';

import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";
import Detail from "./pages/Detail";

/*
   - 페이지 전환하기
     * 기존의 페이지 전환
       1) detail.html 파일 만들고
       2) /detail.html로 접속하면 detail.html파일을 보여줌

     * react에서 페이지 전환
     1) 컴포넌트로 상세페이지 만들기
     2) /detail로 접속하면 기존의 index.html파일을 모두 비운후
        1번의 컴포넌트를 보여줌(싱글 페이지)
        ** 이전에는 여러페이지를 가지고 불러오기로 보여줬다면,
           여기서는 페이지는 하나고 안에 있는 내용이 들어옴

   - router-dom : 페이지 교체시켜주는 api
     1) 설치 : npm i react-router-dom ** i = install
     2) index.js에서 import :
       import{BrowserRouter} from "react-router-dom";
           <BrowserRouter>
             <App />
           </BrowserRouter> import해주고 <App/>을 BrowserRouter로 감싸줌
     3) App.js에서 import :
      import{Routes,Route,Link} from "react-router-dom";
      ** Routes안에 여러개의 Route가 있고, 그 안에 Link를 탐
 */
function App() {
    let [cafes] = useState(cList);
    console.log(cList);

    /*
      - use로 시작하는 함수를 Hook이라 함.
        Hook : 함수명 컴포넌트에서 클래스형 컴퍼넌트 가능
               (state 상태값, life cycle)을 사용할 수 있도록 해주는 함수
               **useState, useNavigate 등
    */
    let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Cafe</Navbar.Brand>
          <Nav className="me-auto">
              {/*링크를 사용할 때는 navigate를 적용해야 함*/}
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            {/*<Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link> 아래에서 클릭-> 상세페이지로 바꿈*/}
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로</Nav.Link>
            {/*
            <Nav.Link href="#cart">Cart</Nav.Link>이런 방식이나
            
            <Link to="/">Home</Link>&emsp;
            <Link to="/detail">상세페이지</Link>
            link를 연결하는 방식으로도 할 수 있지만
            onClick에 navigate를 사용해서 연결할 수 있음
            */}
          </Nav>
        </Container>
      </Navbar>

        {/*Route하나 당 한 페이지*/}
        <Routes>
            {/*<Route path='경로url' element={실행하고자 하는 값}/>
                      path에는 경로 url을 넣고, element는 실행하고자 하는 값을 넣어줌 */}
            <Route path='/' element={
                <>
                    <div className='main-bg'/>
                    <Container>
                        <Row>
                            {/*Row 하나에 Col이 3개 이므로 Col을 Component로 만들면 됨*/}
                            {/*<Col md={4}>
                                <img src={cafe1} width="80%"/>

                                <h4>상품명</h4>
                                <p>가격</p>

                                <h4>{cafes[0].title}</h4>
                                <p>{cafes[0].price}</p>
                            </Col>
                            <Col md={4}>
                            <img src="/img/cafe2.jpg" width="80%"/>
                                <h4>{cafes[1].title}</h4>
                                <p>{cafes[1].price}</p>
                            </Col>
                            <Col md={4}>
                                <img src={`${process.env.PUBLIC_URL}/img/cafe3.jpg`} width="80%"/>
                                이미지 경로를 설정할 때 process.env.PUBLIC_URL를 사용하면
                                애플리케이션이 호스팅된 위치에 관계없이 올바른 경로로 이미지 로드 가능-gpt
                                <h4>상품명</h4>
                                <p>가격</p>
                            </Col>*/}
                                        {/*
                            아래처럼 돌리기 위해서 map()을 사용함
                            <CListImg cafes={cafes[0]} i={1}/>
                            <CListImg cafes={cafes[1]} i={2}/>
                            <CListImg cafes={cafes[2]} i={3}/>
                            */}
                            {
                                // cList개수만큼  map을 돌면 됨
                                cList.map((list, i) => {
                                    // 첫번째인 index[0]번의 객체가 list에 들어와서 list, i값 둘 다 넘어감
                                    return (
                                        <CListImg cafes={list} i={i + 1} key={i}/>/*list의 개수만큼 돌게 됨/인덱스+1로 값 가져옴*/
                                        /*<CListImg cafes={cafes[i]} i={i+1}/> cafes[0]이 아니지않나?*/
                                        /*key={i}는 콘솔창에 오류가 떠서 넣어둠*/
                                    )
                                })
                            }

                        </Row>
                    </Container>
                </>
            }/>
            {/*<Route path='/detail' element={<Detail cafes={cafes}/>}/>*/}
            {/*여기서  cafes={cafes}넘겨준걸 detail에서 받아야함.*/}

            <Route path='/cart' element={<div>장바구니</div>}/>
            <Route path='*' element={<div>404 Not Found</div>}/> {/*404페이지*/}
            {/*
            <Route path='/about/member' element={<div>직원들</div>}/>
            <Route path='/about/location' element={<div>찾아오는 길</div>}/>
            */}

            {/*
            여기서 보낸 값이 Detail.js에도 작용함 -> props
            <Route path='/detail' element={<Detail cafes={cafes}/>} />

            <Route path='/detail/0' element={<Detail cafes={cafes[0]}/>} />
            <Route path='/detail/1' element={<Detail cafes={cafes[1]}/>} />
            <Route path='/detail/2' element={<Detail cafes={cafes[2]}/>} />
            */}

            {/* /detail/0 콜론(:)이후에 넘길 파라미터 값을 적어줌 */}
            <Route path='/detail/:id' element={<Detail cafes={cafes}/>} />

            {/* /detail/0/키값 */}
            <Route path='/detail/:id/:memKey' element={<Detail cafes={cafes}/>} />

            {/* 파라미터(:key)가 여러개 일 때 사용방법 - 콜론(:)이 없는 것은 문자 -> /detail/0/name/kim*/}
            {/*<Route path='/detail/:id/name/:memName' element={<Detail cafes={cafes}/>} />*/}

            {/* member,location이 About경로 안에 들어있음 실제 주소는 /about/member 형식이 됨 */}
            <Route path='/about' element={<About/>}>
                <Route path='member' element={<div>직원들</div>}/>
                <Route path='location' element={<div>찾아오는 길</div>}/>
            </Route>
            <Route path='/event' element={<Event/>}>
                <Route path='ev1' element={<div>오늘의 이벤트</div>} />
                <Route path='ev2' element={<div>생일기념 쿠폰받기</div>} />
            </Route>
        </Routes>

    </div>
  );
}

function About(){
    return(
        <>
            <h4>회사정보들</h4>
            <Outlet></Outlet>
            {/*직원들, 찾아오는 길만 표시되게 Outlet사용*/}
        </>
    )
}

function Event(){
    return(
        <>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </>
    )
}

function CListImg(props){ // 넘겨주고자 하는 변수이름과 동일하게 props를 넣어줘도 됨..?
    return(
        <>
            <Col md={4}>
                {/*<img src={`${process.env.PUBLIC_URL}/img/cafe3.jpg`} width="80%"/>*/}
                <img src={`${process.env.PUBLIC_URL}/img/cafe${props.i}.jpg`} width="80%"/>
                <h4>{props.cafes.title}</h4>
                <p>{props.cafes.price}</p>
            </Col>
        </>
    )
}

export default App;
