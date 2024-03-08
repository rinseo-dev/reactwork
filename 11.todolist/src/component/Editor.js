import './Editor.css'
import {useRef, useState} from "react";

const Editor= ({onCreate}) =>{ // props로 가져오지 않고 onCreate값을 사용
    const [content,setContent] = useState("");
    
    // App.js에서 만든 useRef를 사용
    const contentRef = useRef();

    return (
        <div className="Editor">
            <input value={content} ref={contentRef} placeholder="Todo1List 추가"
             // onChange : 어떤 이벤트가 발생했다면
             onChange={(e)=>{
                 setContent(e.target.value);
             }}/>
            {/*이벤트가 발생한건 모두 e라는 매개변수로 들어가서 setContent에 들어가고,
            e가 발생한곳에 값을 가져와서 content에 넣는것*/}
            <button onClick={()=>{
                if(content == "") {
                    contentRef.current.focus();
                    // input에 ref로 contentRef를 넣어줬기때문에 contentRef가 input박스를 의미하게 됨
                    // input박스가 비어 있을 때 contentRef를 지칭해서 focus()를 주면 됨

                    return; // content에 값이 없으면 onCreate가 되지 않고 멈추도록 return넣음
                }
                onCreate(content)
                setContent("") // 실행 후에 input박스를 비우기 위해서
                // input박스에 value로 content를 주고, setContent에 ""를 넣으면 추가 후 input박스가 비워짐
            }} >추가</button>
        </div>
    )
}

export default Editor;