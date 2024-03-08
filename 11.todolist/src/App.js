
import './App.css';
import Editor from "./component/Editor";
import Header from "./component/Header";
import List from "./component/List";
import {useRef, useState} from "react";

const tmpData=
    [
        {
            id:0,
            isDone : false,
            content:"React 공부하기",
            data:new Date().getTime()
        },
        {
            id:1,
            isDone : false,
            content:"퍼질러 자기",
            data:new Date().getTime()
        },
        {
            id:2,
            isDone : false,
            content:"게임 하기",
            data:new Date().getTime()
        }
    ]
function App() {
    // tmpData를 사용하기 위해 useState만듦
    const [todos,setTodos ] = useState(tmpData) // 초기값은 tmpData

    // useRef는 import가 필요함
    const idRef = useRef(3) // 초기값 3부터
    // useRef를 사용하면 값 늘리기 편함. 아니면 useState로 만들어줘야함


    // 여기 부분은 react여서 push를 못넣고 setTodos를 사용해서 값을 넣어야 함
    const onCreate = (content) => { //function onCreate(content){} 로 사용해도 됨
        // newItem이라는 이름으로 객체를 만들어서 추가하게 됨
        const newItem = {
            /*id:0,*/
            id : idRef.current++, // idRef에 있는 3을 실행하고, ++로 4가 됨
            isDone:false, // 체크박스 체크 여부
            content:content,
            date:new Date().getTime()
            // key인 id, isDone, content, date와 같은 내용을 하나 만들어냄
        }
        // setTodos()[{새배열},{id:0},{id:1},{id:2}] 이런식으로 만들어져야함.

        // setTodos에 새배열을 넣고, 기존의 배열을추가해줌
        //[newItem,[todos]]로 만들면 2차원배열이 되므로 풀어서 사용해야함. '...todos'로 사용
        setTodos([newItem,...todos])
        // 배열 뒤에 추가하고 싶으면 setTodos[...todos, newItem]순으로 적어주면 됨
        // setTodos에 기존 값인 ...todos와 newItem을 넘겨서 todos에 기준값+새값이 같이 들어가게됨
    }

    const onUpdate = targetId =>{
        // setTodos에서 isDone에 있는 true, false값을 바꿔줘야함
        /*
        setTodos(todos.map(t odo=>{
            if(t odo.id == targetId){ // 처음 갖고 온 값(t odo)의 id와 targetId에 넘어온 값이 같은지 확인
                return{
                    // 객체를 풀고(...t odo), isDone이라는 값을 T->F, F->T로 바꿈(!t odo.isDone)
                    ...t odo,
                    isDone: !t odo.isDone
                }
            }
            return t odo //바꾼 값을 return
        }))
        */
        // 위 if문을 삼항연산자로 한줄로 줄임
        // setTodos함수는 todos 배열을 가져와서 각 요소를 변환 후 다시 설정하는 역할을 함
        // map()함수는 todos라는 배열의 각 요소를 순회해 지정된 함수를 적용하고 새로운 배열 반환함
        setTodos(todos.map(
            todo=> todo.id == targetId ? {...todo,isDone:!todo.isDone}:todo)
        )
    }
    

  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate}/>
        {/*App에서 List로 갈 때 todos를 넘겨줌/ List에 onUpdate넣어줘야함*/}
    </div>
  );
}

export default App;
