import './List.css'

import TodoItem from "./TodoItem";
import {useState} from "react";

function List({todos}){
    const [search, setSearch] = useState("")
    const getFilterdData = () => {
        if(search === "") {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        )
    }
    const filteredTodos = getFilterdData();

    return(
        <div className="List">
            <h4>ToDo List📌</h4>
            <input placeholder="검색어를 입력하세요"
                   onChange={(e)=>{setSearch(e.target.value)}}/>
            <div className='todos_wrapper'>
                {
                    filteredTodos.map(todo=>
                        <TodoItem {...todo}/>
                    )
                }
            </div>
        </div>
    )
}

export default List;