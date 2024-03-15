
import './App.css';
import Controller from "./component/Controller";
import Views from "./component/Views";
import {useEffect, useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    const [text,setText] = useState("");
    const onClickBtn = (value) => {
        setCount(count+value);
    }

    // 변경된 값을 감지하여 내가 정의한 함수를 실행
    // lifecycle을 제어하는데 사용
    useEffect(() => {
        console.log("count update:"+count+","+text)
    }, [count,text]); // count 값이 변경되면 useEffect안쪽 함수{} 값이 실행됨

    function onChangeInput(e){
        console.log(e.target.value);
        setText(e.target.value)
    }

  return (
    <div className="App">
        <h1>Counter</h1>
        {/*<input value={text} onChange={(e)=>setText(e.target.value)}/>*/}
        <input value={text} onChange={onChangeInput}/>
        {/*value={count}하면 바로 값을 띄울수도 있음*/}
        <Views count={count}/>
        <Controller onClickBtn={onClickBtn}/>
    </div>
  );
}

export default App;