
import './App.css';
import Header from "./component/Header";
import React from "react";
import Body from "./component/Body";
import Footer from "./component/Footer";

/*
// 1. 변수에 담긴 값 넘기기
function App() {
    // const name = "박미영";
    const addr = "금천구 가산동";

  return (
    <div className="App">
      <Header/>
      <Body user={"박미영"} juso={addr}/> {/!*변수이름을 넣어서 Body를 호출하면서 key는 user, 값은 name을 넘겨줌*!/}
      <Footer/>
    </div>
  );
}*/

/*

//2. 객체 형태를 넘기기
function App() {
    const userInfo={ // 객체를 사용해서 값을 넘길 때 '...XXX'으로 넘겨주면 편함
        name : "박미영",
        addr : "금천구 가산동",
        likeList : ["캐릭터","만화","웹툰"]
    }; // 객체는 중괄호를 넣음

    return (
        <div className="App">
            <Header/>
            {/!*<Body user={userInfo.name} addr={userInfo.addr}/>*!/}
            {/!*<Body {...userInfo}/>*!/}
            <Body userInfo={userInfo}/>
            <Footer/>
        </div>
    );
}
*/


//3.
function App() {

    return (
        <div className="App">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}


export default App;
