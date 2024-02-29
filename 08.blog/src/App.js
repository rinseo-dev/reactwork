import './App.css';
import {useState} from "react";


function App() {
    //let title =['이레구내식당','동남집','얌샘김밥'];
    let[title, setTitle] = useState(['이레구내식당','동남집','얌샘김밥']);
    let[like,setLike] = useState(0);
    // onClick을 하면 setLike에 1이 전달됨 / useState(안녕), onClicke setLike(반가워) 면 메달을 클릭하면 안녕->반가워 로 변경됨
    // 상태값을 변경할 때 useState를 사용함.

    let[num1,num2]=[3,6];
  return (
      <div className="App">
          <h2 className="title1">맛집 추천 Blog</h2>
          <div className="list">
              <h4>{title}</h4>
              <p>2월 28일<span onClick={()=> {setLike(like+1)}} className="span-left">🏅</span>{like}</p>
          </div>
          <List/>

      </div>
  );
}

function List(){
    return (
        <div className="list">
            <h4>이레구내식당</h4>
            <p>2월 28일<span className="span-left">🏅</span></p>
        </div>
    )
}
export default App;
