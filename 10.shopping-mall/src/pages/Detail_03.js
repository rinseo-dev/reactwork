import {Container, Row, Col, Button, Nav} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";

/*
    탭 만들기
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

    return(
        <>
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

                        <h4>{findId.title}</h4>
                        <h4>{findId.content}</h4>
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
            {/*
            각 탭마다 맞는 번호의 내용이 뜨게 하고 싶음
            <div>내용0</div>
            <div>내용1</div>
            <div>내용2</div>
            */}
            {/*
            이렇게 해도 되지만 비효율적
            {tab == 1 ? <div>내용1</div> : null}
            {tab == 2 ? <div>내용2</div> : null}
            {tab == 0 ? <div>내용0</div> : null}
            */}
            {/*
            삼항연산자 사용
            {
                tab == 0 ? <div>내용0</div> : ( tab == 1 ? <div>내용1</div> : tab == 2 ? <div>내용2</div> : null)
            }
            () 괄호는 없어도 됨. 헷갈리지 않게 넣은 것
            */}
            <TabContent tab={tab} name={'kim'} age={30}/>
        </>
    )
}

// 컴포넌트로 만들 때는 return을 해줘야함 - if문 사용
/*function TabContent(props){ // 컴포넌트에서 tab값 받아서 사용
    if( props.tab == 0){
        return <div>내용0</div>
    }else if( props.tab ==1){
        return <div>내용1</div>
    }else{
        return <div>내용2</div>
    }
}*/

/*
// props대신 {tab}값 받아서 사용.
function TabContent({tab,name,age}){ // {tab, name, age}등 여러개 받기도 가능함
    console.log(tab);
    console.log(name);
    console.log(age);
    if(tab == 0){
        return <div>내용0</div>
    }else if(tab ==1){
        return <div>내용1</div>
    }else{
        return <div>내용2</div>
    }
}
*/

/*
let a = [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>]
a[0]
a[1]
a[2]
이런 형식으로 하려는 경우
*/
function TabContent({tab}){
    /* let  a = [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>] */

    return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]
    // 배열로 보고 작성된 것, 내용0은 index 0번, 내용1은 1번인 상황
}
// 야이 엄청 간단하네 뭐냐이거

export default Detail;