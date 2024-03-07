
import './App.css';
import {Navbar, Container, Nav, Row, Col, Button} from 'react-bootstrap';
/*
react-bootstrap을 사용하려면 먼저 cdn을 index.html이나 index.js에 넣어주고
사용할 프로젝트에 npm install react-bootstrap bootstrap를 해줌
그런 뒤에 사용할 것들을 모두 import로 넣어주면 됨
import {Button, Navbar, Container, Nav} from 'react-bootstrap'; 이런 형식
*/
import {createContext, useState} from "react";

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
import axios from "axios";
import Cart from "./pages/Cart";

/*
   - AJAX 사용
   설치 : npm i axios
 */

// java에서 사용하는 static과 Context가 같다고 보면 됨. 단, Redux를 더 많이 사용함
export let Context1 = createContext();

function App() {
    let [stock, setStock] = useState([10,11,12]); // stock에 배열 값을 넣어서 사용
    let [cafes,setCafes] = useState(cList);
    // console.log(cList);

    let navigate = useNavigate();
    let [btnCount, setBtnCount] = useState(2);
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
                            {
                                // cList개수만큼  map을 돌면 됨
                                cafes.map((list, i) => {
                                    // 첫번째인 index[0]번의 객체가 list에 들어와서 list, i값 둘 다 넘어감
                                    return (
                                        <CListImg cafes={list} i={i + 1} key={i}/>/*list의 개수만큼 돌게 됨/인덱스+1로 값 가져옴*/
                                    )
                                })
                            }
                        </Row>
                    </Container>

                    {/*버튼 클릭할 때마다 하나씩 값이 늘어남
                       이미지는 기존에 사용한 값들과 이름 동일하게 감
                       ex) cafe4.jpg, cafe5.jpg */}
                    <Button variant="secondary" onClick={()=>{
                        /*
                        axios.Method('서버url') // -> Method는 get, post, put 등 프로토콜
                             .then((변수)=>{})  // -> 성공했을 때
                             .catch(()=>{}) // -> 실패했을 때
                        */
                        // get 주소는 쌤이 주심
                        /*axios.get('https://raw.githubusercontent.com/professorjiwon/data/main/data2.json')*/
                        axios.get(`https://raw.githubusercontent.com/professorjiwon/data/main/data${btnCount}.json`)
                            .then((result)=>{
                                // 받아온 값이 result에 있음
                                console.log(result.data);
                                // cafes배열에 값을 추가하려면 result값이 들어왔을 때 추가하면 됨
                                // 배열만큼 돌게 했으므로 값이 추가되면 그만큼 더 돎

                                let copy = [...cafes, ...result.data] // result.data로 result안에 데티어만 가져옴
                                // 기존의 값 3개 + result 값을 넣어준 상태
                                setCafes(copy) // 배열변경
                                setBtnCount(btnCount+1)
                            })
                            .catch(()=>{
                                console.log('실패');
                                alert('더이상 상품이 없습니다');
                            })
                        
                        // 1번 클릭하면 data2.json, 2번은 data3.json, 3번 클릭은 data4.json은 없으므로 alert띄우기




                        /*
                        - 서버로 보낼때
                        axios.post('서버url',보낼 데이터) // -> 데이터는 객체형태로
                             .then((변수)=>{})  // -> 성공했을 때
                             .catch(()=>{}) // -> 실패했을 때

                        ex)
                        axios.post('https://raw.githubusercontent.com/professorjiwon/data',{name:'kim',age:20,tel:'010-1111-2222'})
                             .then((변수)=>{})  // -> 성공했을 때
                             .catch(()=>{}) // -> 실패했을 때

                        - 여러서버에 동시 요청 (url 여러개 사용)
                          Promise.all([axios.get('서버url') ,axios.get('서버url2') ,axios.get('서버url3') ]) // 배열로 넣어줌
                             .then((변수)=>{})  // -> 성공했을 때
                             .catch(()=>{}) // -> 실패했을 때
                        */

                         /* 이거안됨
                        Promise.all([axios.get('https://raw.githubusercontent.com/professorjiwon/data/main/data2.json'),
                                            axios.get('https://raw.githubusercontent.com/professorjiwon/data/main/data3.json'),
                                            axios.get('https://raw.githubusercontent.com/professorjiwon/data/main/data1.json')
                        ])
                            .then((result)=>{
                                console.log(result.data);
                                let copy2 = [...cafes,...result.data]

                            })  // -> 성공했을 때
                            .catch(()=>{console.log('실패');})*/

                    }}>서버에서 데이터 가져오기</Button>
                </>
            }/>


            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<div>404 Not Found</div>}/> {/*404페이지*/}

            <Route path='/detail/:id' element={
                <Context1.Provider value={{stock,cafes}}>
                    <Detail cafes={cafes}/>
                </Context1.Provider>
            }/>
            {/*detail이라는 컴포넌트를 넣으면서 props값을 넘겨준게 됨*/}

            {/* /detail/0/키값 */}
            <Route path='/detail/:id/:memKey' element={<Detail cafes={cafes}/>} />


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
                {/*클릭하면 이동할 수 있게 a태그, navigate*/}
                <a href={`./detail/${props.i-1}`}>
                    <img src={`${process.env.PUBLIC_URL}/img/cafe${props.i}.jpg`} width="80%"/>
                </a>

                {/*onClick navigate*/}
                <h4>{props.cafes.title}</h4>
                <p>{props.cafes.price}</p>
            </Col>
        </>
    )
}

export default App;
