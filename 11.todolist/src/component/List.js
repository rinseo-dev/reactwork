import './List.css'

import TodoItem from "./TodoItem";
import {useState} from "react";
const List =({todos,onUpdate})=>{ // props 또는 {todos}로 받음
    const [search,setSearch] = useState("");
    const getFilterData = () =>{
        if(search == ""){
            return todos;
            // 검색 값이 없을 때는 기본 리스트 그대로 띄움
        }
        return todos.filter((todo)=>
            //t odo.content.includes(search)
            // include()함수 : t odo.content와 search가 같으면 true반환, 다르면 false 반환

            todo.content.toLowerCase().includes(search.toLowerCase())
            // 대소문자 구분없이 검색 가능하게 하기 위해서 toLowerCase()를 넣음
            // 비교할 때만 기존에 저장되어있던 content도 소문자, 검색어도 소문자로 바꿔서 조회하게 해줌
            // 그래서 toUperCase()로 넣어도 둘 다 적용하면 상관없음
        )
    }
    
    const filteredTodos = getFilterData(); // getFilterData()를 호출한 결과를 filteredTodos에 넣음
    /*filter로 찾았을 때 찾아진 값은 true, 아닌 값은 false로 나뉘는데
    true인 것만 배열로 반환이 됨 [{0},{2}] 이런 형식*/
    return(
        <div className="List">
            <h4>ToDo List📌</h4>
            <input placeholder="검색어를 입력하세요"
                    onChange={(e)=>{setSearch(e.target.value)}}/>
            <div className='todos_wrapper'>
                {
                    /*todos.map(t odo=>
                        <TodoItem {...t odo}/>
                    )*/
                    filteredTodos.map(todo=>
                        <TodoItem {...todo} onUpdate={onUpdate}/>
                        /*여기는 {onUpdate}라는 props로 넘겨준 값을 받은것, TodoItem도 받아야함*/
                    )
                }
            </div>
        </div>
    )
}

export default List;