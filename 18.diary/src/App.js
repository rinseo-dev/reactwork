import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import React, {createContext, useReducer, useRef} from "react";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import Button from "./component/Button";
import Header from "./component/Header";

/*
import emotion1 from './resources/img/emotion1.png';
<img src={emotion1}/>
이렇게 호출해서 사용할 수 있음
*/

/*
이런 형태로도 사용 가능 - import에 {}중괄호 필요
import {getEmotionImg} from "./util/get-emotion-img";
<img src={getEmotionImg(1)} alt={"이미지1"}/>
*/

/*
   **
   route 사용 설치 : npm i react-router-dom
   index.js에서 BrowserRouter로 변경

   1. "/" : 모든 diary를 보여주는 페이지
   2. "/new" : diary쓰기
   3. "/diary" : diary 상세보기
   4. "/edit" : 수정 페이지
 */

const mockData = [
    {
        id : 1, // id로 작성자 구분
        createDate : new Date("2024-03-18").getTime(),
        emotionId : 1,
        content : "1번 일기 내용"
    },
    {
        id : 2,
        createDate : new Date("2024-03-15").getTime(),
        emotionId : 2,
        content : "2번 일기 내용"
    },
    {
        id : 3,
        createDate : new Date("2024-02-17").getTime(),
        emotionId : 3,
        content : "3번 일기 내용"
    },
    {
        id : 4,
        createDate : new Date("2024-02-03").getTime(),
        emotionId : 4,
        content : "4번 일기 내용"
    },
    {
        id : 5,
        createDate : new Date("2024-01-24").getTime(),
        emotionId : 5,
        content : "5번 일기 내용"
    }
]

function reducer(state, action){ // 기존값, 새로 들어온 값
    switch(action.type){
        case "CREATE" :
            return [action.data, ...state]
        // 배열에 있는걸 풆어서 가져오고, 새로 들어온 값 action넣어줌
        case "UPDATE":
            // item이라는 변수 이름으로 받은 id값을 action데이터랑 비교
            return state.map((item)=>item.id === action.data.id ? action.data : item)
        case "DELETE":
            // item이 가진 id와 action이 가진 id 중 같지 않은 것만 반환하므로 삭제와 똑같음
            return state.filter((item)=>item.id != action.id)
        default:
            return state;
    }
}

// mockData는 const data에 들어있음.
// Routes를 넘겨주기 위해 DiaryStateContext로 감싸서 넘김
// 다른데서 사용하기 위해서 export로 내보내기
export const DiaryStateContext = createContext();

// 작성, 수정, 삭제 기능을 감싸서 넘김
export const DiaryDispatchContext = createContext();
function App() {
    const nav = useNavigate();

    // reducer는 lifecycle이 바뀔때마다 , 어떤 값이 변경되는걸 조절(?)
    const [data, dispatch] = useReducer(reducer,mockData); // mockData가 초기값으로 설정됨
    const idRef = useRef(3);

    // 새로운 diary 추가
    const onCreate = (createDate, emotionId, content) => {
        dispatch({
            type:"CREATE",
            data:{
                id:idRef.current++,
                createDate,
                emotionId,
                content
            }
        })
    }

    // diary 수정 - 수정에는 id값이 필요함 id를 찾아서 해당 글을 수정
    const onUpdate = (id, createDate, emotionId, content) => {
        dispatch({
            type:"UPDATE",
            data:{
                id,
                createDate,
                emotionId,
                content
            }
        })
    }

    // diary 삭제
    const onDelete = (id) => {
        dispatch({
            type:"DELETE",
            data:{
                id
            }
        })
    }
    
    return (
        <>
            {/*Routes에 있는 내용을 가져가기 위해서 DiaryStateContext로 감싸줌
               data에는 mockData에 있는 값들이 들어있음
               모든 곳에서 data를 사용할 수 있도록 가장 바깥에 감싸줌(?) */}
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/new" element={<New/>}/>
                        <Route path="/diary/:id" element={<Diary/>}/> {/*id값을 사용해서 구분*/}
                        <Route path="/edit/:id" element={<Edit/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
}

export default App;