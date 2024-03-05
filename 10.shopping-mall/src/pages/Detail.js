import {Container, Row, Col, Button} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import {useEffect, useState} from "react";

/*
   - Lifecycle(생명주기)
     class Detail extends React.Component{
         componentDidMount(){
            // Detail 컴포넌트가 로드되고 나서 실행할 코드
         }
         componentDidUpdate(){
            // Detail 컴포넌트가 업데이트 되고 나서 실행할 코드
         }
         componentWillUnmount(){
            // Detail 컴포넌트가 삭제 되기 전에 실행할 코드
         }
     }

     컴포넌트는
     1) 생성이 될 수도 있고(mount)
     2) 재렌더링이 될 수도 있고(update)
     3) 삭제가 될 수도 있다(unmount)

     ** 프로그램이 로딩됐을 때 바로 실행하거나 재렌더링, 삭제가 됐을 때에 맞춰서 사용할 수 있음
     
   - useEffect 안에 적은 코드는 html 렌더링 이후에 동작한다
        * useEffect 밖에 적은 코드는 위에서부터 차례대로 실행(렌더링이 나중에 됨)
     # html 렌더링이 빠른 사이트를 원하면 시간이 걸리는 코드는 useEffect()안에 작성
     # useEffect 안에 적는 코드들
     1) 어려운 연산(시간이 걸리는 연산)
     2) 서버에서 데이터를 가져오는 작업
     3) 타이머 등
     
     ** 부가적인 기능을 sideEffect라고 하는데 여기서 따온 이름이 useEffect
     
   - useEffect(()=>{실행할 코드}) : mount, update가 될 때마다 실행
   - useEffect(()=>{실행할 코드},[]) : mount 되었을 때 1번만 실행
   - useEffect(()=>{실행할 코드},[변수]) : 변수가 변할 때만 실행

 */

function Detail(props){ // cafes={cafes} 넘긴걸 props로 받은 것
    // App.js에서 Route path='/detail' element={<Detail cafes={cafes}/>넘긴거 props로 받아옴
    // url옆에 넣은 값을 useParams()로 가져올 수 있음
/*

    useEffect(() => {
        // mount, update될 때 실행될걸 넣어줌
        // Lifecycle Hook이라고 함
        console.log('로드되고 실행1'); // html이 렌더링 되고나서 나옴
        
        // for문을 돌려서 시간 텀을 둬보면 useEffect 렌더링이 나중에 된다는걸 알 수 있음
        for(let i=0; i<100000; i++){
            console.log(i);
        }
    }, []);
    console.log('로드되고 실행2'); // useEffect가 실행되고 나서 실행되기 때문에 이건 나중에 뜸
*/
    let [count, setCount] = useState(0);

    /*useState(true)를 만들어서 2초 후에 false로 바꾸면 됨..?*/
    let [alert,setAlert] = useState(true);

    useState(()=> {
        setTimeout(() => {
            setAlert(false)
        }, 2000);
        /*
        }) mount,update될때마다 실행
        },[]) mount되었을 때 한번만 실행
        },[count]) []괄호 안의 값이 변할때 실행 */
    },[count])



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

    return(
        <>
            {count}
            <button onClick={()=>{setCount(count+1)}}>버튼</button>

            {
                alert == true ? <div>2초 이내 구매시 10% 할인</div> : null
            }

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
        </>
    )
}

export default Detail;