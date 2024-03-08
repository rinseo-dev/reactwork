import './Editor.css'
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {addTodoList} from "../store";

function Editor(){
    let dispatch = useDispatch()
    const [content,setContent] = useState("");
    const contentRef = useRef();
    const idRef = useRef(3);

    return (
        <div className="Editor">
            <input value={content} ref={contentRef} placeholder="TodoList 추가"
                   onChange={(e) => {
                       setContent(e.target.value);
                   }}/>
            <button onClick={() => {
                if (content == "") {
                    contentRef.current.focus();
                    return;
                }
                dispatch(addTodoList({id : idRef.current++,
                    isDone :false,
                    content: content,
                    date : new Date().getTime()}))
                setContent("")
            }}>추가
            </button>
        </div>
    )
}

export default Editor;