import './Editor.css'
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {onCreate} from "../store";
// dispatch, onCreate를 사용하기 위해 useDispatch와 onCreate를 import

const Editor= () =>{ // props로 받았던거 빠짐
    let dispatch = useDispatch(); // dispatch사용
    const [content,setContent] = useState("");
    const contentRef = useRef();
    const idRef = useRef(3);

    return (
        <div className="Editor">
            <input value={content} ref={contentRef} placeholder="TodoList 추가"

             onChange={(e)=>{
                 setContent(e.target.value);
             }}/>

            <button onClick={()=>{
                if(content === "") {
                    contentRef.current.focus();
                    return;
                }
                dispatch(onCreate({content,id:idRef.current++})) // id라는 key에 idRef값 넣음
                setContent("")
            }} >추가</button>
        </div>
    )
}

export default Editor;