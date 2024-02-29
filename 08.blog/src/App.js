import './App.css';
import {useState} from "react";

/*
   - map을 이용한 반복문 사용하기

   - props : 부모 -> 자식에게 state를 전송
     1. <자식컴포넌트 변수이름 = {state이름}>
     2. 자식 컴포넌트에서 파라미터 하나 추가하여 받는다
     **사용이름은 무조건 props
 */


function App() { // 이 안에서 선언한 변수는 App안에서만 사용함
    let[num1,num2]=[3,6]; // 예시

    //let title =['이레구내식당','동남집','얌샘김밥'];
    let [title, setTitle] = useState(['트리니티','이레구내식당','동남집','얌샘김밥']);

    let [modal,setModal] = useState(false); // true면 모달창이 보이게 할것

    // 기존 like
    /* let[like,setLike] = useState(0); */
    // onClick을 하면 setLike에 1이 전달됨
    // useState(안녕), onClicke setLike(반가워) 면 메달을 클릭하면 안녕->반가워 로 변경됨
    // 상태값을 변경할 때 useState를 사용함.
    // useState는 기존값에서 상태가 변경되었을때만 재렌더링을 함

    // like에는 실제 값인 '0', setLike는 State를 변경하는 변경용 함수가 들어감.
    // setLike를 통해 like값이 변경됨

    /*
        지금은 메달모양을 클릭하면 모든 like값이 동일하게 상승함. 각각 사용하도록 해야 함
        title의 총 개수가 3개이므로 like도 3개가 필요한 상태.
        let[like1,setLike1] = useState(0);
        let[like2,setLike2] = useState(0);
        let[like3,setLike3] = useState(0);
        이렇게 작성해도 되지만 효율이 너무 좋지않음. 100개 만들게 되면 코드가 너무 길어짐

        title의 개수를 이용해서 배열로 만들면 됨
     */

    // 배열로 만들어주면 됨
    let [like,setLike] = useState([0,0,0]);

    // 모달에 클릭한 제목이 들어가게 하기 위한 state
    let [modalTitle,setModalTitle] = useState(0); // 0,1,2 중에 하나가 들어가도록 해줌

    // input을 저장할 state
    let[inputValue, setInputValue] = useState('');
    // 사용자가 input에 값을 넣을 때 setInputValue가 가져와서 inputValue에 넣어줌

    // map()함수
    let arr = [3,6,8];
    // arr배열에 있는 개수만큼 돌림
    arr.map(()=>{
        //console.log(1); // 1을 찍으라고 했는데 개수가 3개이므로 3번 돌리게 되는것
    });

    [3,6,8].map((a)=>{
        //console.log(a);
    });
    // 배열에 있는 값을 하나씩 a에 넣었고, 그걸 출력했음

    let newArr = [2,7,9,8].map(()=>{
        return '172638';
        // return을 했으므로 newArr안에 ['172638','172638','172638']가 들어가게 됨
    });
    //console.log(newArr);

    // newArr2에  4,14,18을 넣고 싶을 때
    let newArr2 = [2,7,9].map((b)=>{
        return b*2;
    });
    //console.log(newArr2);
    /*
       JavaScript의 map() 메서드는 배열 내의 각 요소에 대해 주어진
       함수를 호출한 결과를 모아서 새로운 배열을 반환합니다.
       여기서 (b)는 매개변수로, 각 요소를 가리킵니다.
       이 경우에는 배열 [2, 7, 9]의 각 요소를 가리키는 것입니다.
       그리고 이후에 b * 2를 통해 각 요소를 2배로 만든 후, 그 값을 새로운 배열에 저장합니다.

        따라서 map() 안에서 b의 역할은 현재 순회 중인 배열의 각 요소를 가리키는 것입니다.
     */


  return (
      <div className="App">
          <h2 className="title1">맛집 추천 Blog</h2>
          {/*
          <button onClick={() => {setTitle(['이향','얌샘김밥','동우북어'])}}>글 수정</button>
          이렇게 하면 되긴 하지만 복사해서 사용할것
          */}
          {/*setTitle()안에 바꾸고싶은 매개변수를 넣어줌
          단, onClick={()=>{setTitle('이향')}} 이렇게 한다고 해서 모두 '이향'으로 변경되는건 아님 */}

          {/*복사하여 사용*/}
          <button onClick={() => {
              let copy = [...title]; // let copy = '이레구내식당','동남집','얌샘김밥'
              /*
                 '...'은 spread operator문법
                 array나 object의 자료형의 왼쪽에 붙일 수 있다
                 의미 : 괄호를 벗겨서 새로운 array나 object를 만들어 반환
               */

              copy[0] = '김밥천국'; // copy 0번 값을 김밥천국으로 바꿈
              setTitle(copy) // setTitle에 copy값을 넘겨줌
              // '글 수정' 버튼을 클릭하면 title[0]의 값이 '김밥천국'으로 표기됨
          }}>글 수정
          </button>
          {/*
            let copy = title;
            title에 있는 배열을 copy라는 변수에 넣어줬지만
            title과 copy의 주소가 같으므로 재렌더링이 일어나지 않아 사용할 수 없음
          */}

          <div className="list">
              <h4>{title[0]}</h4> {/*{'김밥천국'}이라고 직접 입력해도 되지만 그러면 프로그래밍이 아님*/}
              <p>2월 28일<span onClick={() => {
                  setLike(like + 1)
              }} className="span-left">🏅</span>{like}</p>
              {/* setLike+1을 function으로 따로 만들어서 사용해도 됨. 지금은 직접 넣은 것
              ()=>{setLike(like+1)}을 통해 변경되는 값이 setLike변수에 들어감
              setLike에 들어간 값이 like에 들어가면서 실제 0이었던 값이 변경되는 것
              그래서 html본문에 {like}로 넣어둔 값이 증가되는 숫자로 표시됨 */}
          </div>
          <div className="list">
              <h4>{title[1]}</h4>
              <p>2월 28일<span onClick={() => {
                  setLike(like + 1)
              }} className="span-left">🏅</span>{like}</p>
          </div>
          <div className="list">
              {/* <h4 onClick={()=>{setModal(true)}}>{title[2]}</h4>*/}
              <h4 onClick={() => {
                  setModal(!modal)
              }}>{title[2]}</h4>
              <p>2월 28일<span onClick={() => {
                  setLike(like + 1)
              }} className="span-left">🏅</span>{like}</p>
          </div>
          {/*<List/>*/}{/*컴포넌트실습*/}

          <hr/>
          <p>윗쪽으로는 기존코드 / 아래는 수정코드</p>
          <hr/>

          {/*[배열].map(()=>{}하면 배열 개수만큼 반복한것과 같음*/}
          {
              /*[1,2,3].map(()=>{}) 이렇게 작성하면 괄호 안쪽 내용이 3번 반복됨*/
              title.map((t, i) => { // title배열 개수만큼 반복됨
                  // title값을 t에 넣어서 하나씩 반복하고 i는 index값을 갖게 됨
                  return (
                      <div className="list" key={i}>  {/*key={i}를 넣어줘야 콘솔오류 사라짐. 리액트법칙..?*/}
                          {/*<h4>{title[1]}</h4>*/}
                          {/*<h4 onClick={() => {setModal(!modal)}}>{title[i]}</h4>*/}
                          <h4 onClick={() => {
                              setModal(!modal)
                          }}>{t}</h4>
                          {/*title에 있는 값을 t에 넣어서 하나씩 출력하게 됨*/}

                          <p>2월 28일<span onClick={() => {
                              {/*setLike(like[i]+1)*/
                              }
                              let copy2 = [...like]; /*[like]로 넣으면 주소가 들어가는것*/
                              copy2[i] = copy2[i] + 1;
                              setLike(copy2);
                              /*[0,0,0]이었는데 2번째 메달을 클릭하면 [0,1,0]으로 변경돼 두번째 like값은 1로 출력*/
                          }} className="span-left">🏅</span>{like[i]}</p>

                          <button onClick={()=>{
                              let copy5 = [...title];
                              copy5.splice(i,1);
                              setTitle(copy5)
                          }}>삭제</button>
                      </div>
                  )
              })
          }

          {/* onChange 등을 사용해서 값이 변동된걸 확인 할 수 있음
            input에 어떤 변동이 생기면 console에 띄움 */}
          {/*<input onChange={(e)=>{console.log(e.target.value)}} />*/}
          <input onChange={(e) => {
              // 사용자가 넣은 값을 setInputValue에 넣음
              setInputValue(e.target.value);
              //console.log(e.target.value)
              //e.target.value는 input에 들어온 값을 찾아냄
              // let[inputValue, setInputValue] = useState('');에서 ''공백이 먼저 들어가므로
              // 첫 입력때 공백이 먼저 콘솔창에 뜸.
          }}/>

          {/*let [title, setTitle] = useState(['트리니티','이레구내식당','동남집','얌샘김밥']);
          배열 맨 앞에 값 추가하기
          복사해서 사용할 것, unshift 사용*/}
          <button onClick={()=>{
              // 카피해서 맨 앞에 추가하기 - unshift 사용
              let copy4 = [...title];
              copy4.unshift(inputValue);
              setTitle(copy4);

          }}>글추가</button>


          {/*
            동적 UI를 만드는 방법(모달창 만들기)
            - 유저가 조작시 형태가 바뀌는 모달창, 탭, 서브메뉴, 툴팁, 경고문 등
            
            1. html, css로 미리 디자인
            2. UI의 현재 상태를 state로 저장 ** 꼭 해야 함
                -> let[modal,setModal] = useState(true);로 작성해둠
            3. state에 따라 ui가 어떻게 보일지 조건문 등으로 작성
          */}

          {/*값이 참일 때 모달창을 띄울 수 있게 삼항연산자 작성해야 함*/}
          {
              // 모달창에 적용할 color값 넘겨주기
              // modal ? <Modal color="pink" propsTitle={title}/> : null

              // 버튼을 클릭하면 첫번째 글제목을 '김밥천국'으로 바꾸기
              modal ? <Modal modalTitle={modalTitle} title={title} setTitle={setTitle}/> : null
              // 여기 들어온 값이 props로 넘어가게 됨
              // modalTitle에는 0,1,2 title에는 ['이레구내식당','동남집','얌샘김밥']이 들어온 상태
              // modalTitle이 1이면 이레구내식당이 뜨게 하는 형태
          }
          {/*model에서 변수이름을 지정해서 값, 문자를 넘겨줄 수 있음*/}
      </div>
  );
}

function List() {
    return (
        <div className="list">
            <h4>이레구내식당</h4>
            <p>2월 28일<span className="span-left">🏅</span></p>
        </div>
    )
}

function Modal(props){ // 무조건 props이름으로 들어옴 //props : 부모 -> 자식에게 state를 전송
    return (
        //<div className='modal' style={{backgroundColor:props.color}}> // 위  modal에서 color값넣었을때
        <div className='modal'>
            {/*<h4>제목</h4>*/}
            {/*<h4>{props.title[0]}</h4>*/}
            <h4>{props.title[props.modalTitle]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={()=>{
                // props.modalTitle를 직접 수정하지 말고 복제하여 수정 후 setTitle 호출
                let copy3=[...props.title];
                copy3[props.modalTitle] = '김밥천국';
                props.setTitle(copy3);
            }}>첫번째 제목 변경</button>
        </div>
    )
}

/*
const Modal2 = () => {
    return (
        <div className='modal'>
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}
*/

// map 대신 for문으로 한다면 - return밖에서 해야함
/*
function App(){
    let arr = [];
    for(let i=0; i<3; i++){
        arr.push(<div>안녕</div>)
    }
    return(
        <div>
            {arr}
        </div>
    )
}
*/

export default App;
