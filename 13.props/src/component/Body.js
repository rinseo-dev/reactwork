

/*
App 1번
const Body = (props) =>{ // App에서 Body 컴포넌트로 넘겨준 값을 받기 위해서 props를 사용함
    // props는 자식에게만 넘겨줄 수 있고, 같은 위치에는 넘겨줄 수 없음
    return(
        <div>
            <h3>본문입니다</h3>
            <p>{props.user}은 {props.juso}에 살고 있습니다</p>

            //Body에 likeList를 주석 걸어놓은 상태라 값이 넘어오지않아서 오류가 날 수 있는 상태.
             //아래 defualtProps를 사용해서 오류 예방

        </div>
    )
}
 */

/*
// App 2번
// const Body = ({name,addr,likeList}) =>{ //이렇게 받아도 됨. 그럼 출력을 {user},{addr}로 하면 됨
// const Body = (userInfo) =>{ //이렇게 받아도 됨. 그럼 출력을 {userInfo.user},{userInfo.addr}로 하면 됨

const Body = (props) =>{ // props로 값을 받는데 userInfo 안에 있는 값이므로 props.userInfo.xxx으로 받음
    /!*props는 자식에게만 넘겨줄 수 있고, 같은 위치에는 넘겨줄 수 없음*!/
    return(
        <div>
            <h3>본문입니다</h3>
            {/!*App.js에서 Body 컴포넌트로 user,juso를 넘겨준 걸 받음*!/}
            <p>{props.userInfo.name}은 {props.userInfo.addr}에 살고 있습니다</p>
            <p>내가 좋아하는 것들({props.userInfo.likeList})의 개수는 {props.userInfo.likeList.length}개 입니다</p>
            {/!*Body에 likeList를 주석 걸어놓은 상태라 값이 넘어오지않아서 오류가 날 수 있는 상태.
            아래 defualtProps를 사용해서 오류 예방*!/}
            <p>그 중에서도 특히 {props.userInfo.likeList[2]}을 좋아합니다</p>
        </div>
    )
}

// 배열이 null 일 때 (값이 넘어오지 않은경우) default로 쓸 값을 넣어 오류를 예방함
Body.defaultProps = {
    likeList:[]
}

*/



//3.
import Button from "./Button";
import React from "react";

// 이벤트헨들러 사용할 것
const Body = () =>{
    const btnProps = { // 변수에 값들을 객체로 넣음
        text : "1버튼",
        color:"yellow",
        a:1,
        b:2,
        c:3
    }

    function btnClick(e){
        alert("버튼을 누르지마라탕")
        console.log("e"+e);
        console.log("etv"+e.target.value);
    }

    // return안에 있는 값을 변경하기 힘듦. return 안쪽은 html이고 바깥은 javascript기 때문
    // 값을 js에 넣어놨는데 html에서 변경이 되면 js안에 있는 변수 값도 변경이 되어야 함
    // 값이 변경되는것을 연동시키기 위해서 useState를 사용해야 함
    // 아니면 연동이 되지 않아서 서로 다른 값을 가지고 있게 됨
    return(
        <div>
            <h3>본문입니다</h3>
            <button onClick={btnClick} value="A버튼">A버튼이벤트</button>
            <button onClick={btnClick} value="A2버튼">A2버튼이벤트</button>
            <br/>

            {/*익명함수여서 function()이 빠진 상태*/}
           {/* <button onClick={() => {alert("기본맛")}}>B버튼이벤트</button>*/}
            <br/><br/>
            <Button {...btnProps}/> {/*btnProps를 풀어서 넘겨줌*/}
            <Button/>
        </div>
    )
}


export default Body;