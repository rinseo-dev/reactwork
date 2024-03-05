import {Container, Row, Col, Button} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import styled from "styled-components";

// 경로에 './'가 없으면 외부 라이브러리

/*
   let[cafes] = useState(cList)의 값이 정렬로 바뀌었다면
   0번을 호출했을 때 다른 것이 나옴
   cList의 id를 사용하면 바뀌지 않음
 */

/*
   styled-components : 스타일을 컴포넌트로 만들어 사용하기
   1) 설치 : npm i styled-components
   2) import styled from "styled-components";
   
   장점
   1) css없이 js에서 바로 스타일을 넣을 수 있다
   2) 컴포넌트형 스타일은 다른 js에게 영향을 주지 않는다
   3) 페이지 로딩시간 단축
   
   단점
   1) js파일이 복잡해진다
   2) js파일간에 중복사용시 export하고 import하여 쓴다
 */

// styled.적용할곳
// 키:값; 형태로 백틱안에 지정하면 됨
let YellowBtn = styled.button`
    background: yellow;
    color:black;
    padding:10px;
`;

let Box = styled.div`
    padding:20px;
    background: gray;
`;

let BlueBtn = styled.button`
    background: blue;
    color:black;
    padding:10px;
`;

let Btn = styled.button`
    background: ${props=>props.bg};
    padding:10px;
    color: ${props=>props.bg == 'blue' ? 'white' : 'black'};
`;

function Detail(props){ // cafes={cafes} 넘긴걸 props로 받은 것
    // App.js에서 Route path='/detail' element={<Detail cafes={cafes}/>넘긴거 props로 받아옴
    // url옆에 넣은 값을 useParams()로 가져올 수 있음

    let {id} = useParams(); // props중에 parameter로 넘어온 값 중에 이름이 id인것을 추출해서 가져옴
    console.log(id);
    console.log(typeof(id)); // id는 String형으로 들어옴
    let{memKey} = useParams();
    // let{id, memKey} = useParams(); 이렇게 넣어도 됨

    // props에서 cafes로 넘어온 값 중에 find로 찾음. x값을
    let findId = props.cafes.find(function(x){ // 값을 하나씩 갖고와서 매개변수 x에 넣음
        // x에 들어있는 id와 param으로 넘어온 id가 같은지 확인
        return x.id == id // 비교한 값을 findId에 넣음
        // id값이 같으면 id값이 일치하는 객체가 findId에 들어가있게 됨
    })

    return(
        <>
            <YellowBtn>노란버튼</YellowBtn>
            <Box>박스1</Box><br/><br/>
            <Box>
                <YellowBtn>노란버튼</YellowBtn>
                <BlueBtn>파란버튼</BlueBtn>
                <Btn bg='green'>bg='green'버튼</Btn>
                <Btn bg='blue'>bg='blue'버튼</Btn>
            </Box>
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
                        <YellowBtn>노란버튼</YellowBtn>
                    </Col>
                </Row>
            </Container>
            <YellowBtn>노란버튼</YellowBtn>
        </>
    )
}

export default Detail;