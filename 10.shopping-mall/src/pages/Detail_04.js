import {Container, Row, Col, Button, Nav} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import './../App.css';

/*
    전환 애니메이션
    1) css에 애니메이션 동작 전 스타일(className)
    2) css에 애니메이션 동작 후 스타일(className)
    3) transition 속성 추가
    4) 원하는 태그에 속성 className 넣고 빼기로 사용하면 됨
 */
function Detail(props){ // cafes={cafes} 넘긴걸 props로 받은 것
    // App.js에서 Route path='/detail' element={<Detail cafes={cafes}/>넘긴거 props로 받아옴
    // url옆에 넣은 값을 useParams()로 가져올 수 있음

    
    let {id} = useParams(); // props중에 parameter로 넘어온 값 중에 이름이 id인것을 추출해서 가져옴
    //console.log(id);
    //console.log(typeof(id)); // id는 String형으로 들어옴
    let{memKey} = useParams();
    // let{id, memKey} = useParams(); 이렇게 넣어도 됨

    // props에서 cafes로 넘어온 값 중에 find로 찾음. x값을
    let findId = props.cafes.find(function(x){ // 값을 하나씩 갖고와서 매개변수 x에 넣음
        // x에 들어있는 id와 param으로 넘어온 id가 같은지 확인
        return x.id == id // 비교한 값을 findId에 넣음
        // id값이 같으면 id값이 일치하는 객체가 findId에 들어가있게 됨
    })

    let [tab, setTab] = useState(0);
    let [fade2,setFade2] = useState('');

    // useEffect 사용법이 중요함 - 애니메이션이 먹는지가 중요한게 아님
    useEffect(()=>{
        setTimeout(()=>{
            setFade2('end')
        },200)

        /*fade값이 바뀌면 end를 className에 넣을것 */
        return ()=>{
            setFade2('')
        }
    },[])

    return(
        <div className={`start ${fade2}`}>
            <Container>
                <Row>
                    <Col md={6}>
                        {/*<img src={`${process.env.PUBLIC_URL}/img/cafe${Number(id)+1}.jpg`} width="80%"/>*/}
                        {/*findId로 가져온 값에서 id를 가져와서 이미지 표시*/}
                        <img src={`${process.env.PUBLIC_URL}/img/cafe${findId.id+1}.jpg`} width="80%"/>
                    </Col>
                    <Col md={6}>
                        {/*<p>{props.cafes[0].title}</p>이런 형태였는데 App.js에서 넘어온 값을 받았음 */}
                        {/*<h4>{props.cafes[id].title}</h4> 그다음은 이런형태로  id를 사용했고*/}
                        {/*여기서는 findId값을 사용했음*/}

                        <h4 className='tcolor'>{findId.title}</h4>
                        <p>{findId.content}</p>
                        <h4>{findId.price}</h4>
                        <Button variant="secondary">주문하기</Button>
                    </Col>
                </Row>
            </Container>

            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{setTab(0)}}>탭0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    {/* 탭을 누르면 tab변수의 값을 링크번호로 변경하기 tab초기값은 0인 상태 */}
                    <Nav.Link eventKey="link-1" onClick={()=>{setTab(1)}}>탭1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={()=>{setTab(2)}}>탭2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab}/>
        </div>
    )
}


function TabContent({tab}){
    let [fade,setFade] = useState('');


    // return값이 먼저 실행되고 나서 setTimeout이 실행됨 / 이 구문은 .tab이 바뀔때마다 내용에 애니메이션이 들어감
    useEffect(()=>{
        setTimeout(()=>{
            setFade('end')
        },200)

        /*fade값이 바뀌면 end를 className에 넣을것 */
        return ()=>{
            setFade('')
        }
    },[tab]) // tab이 변결될때마다 애니메이션 효과가 들어가게 - className=start or end


    return (
        <div className={`start ${fade}`}> {/*className이 start만 있다가 end가 붙으면 ani가 됨 className='start end'*/}
            {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>
    )
}

export default Detail;