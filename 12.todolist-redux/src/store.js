import {configureStore, createSlice} from "@reduxjs/toolkit";

let todos = createSlice({
    name:'todos',
    initialState:
        [
            {
                id:0,
                isDone : false,
                content:"React 공부하기",
                data:new Date().getTime()
            },
            {
                id:1,
                isDone : false,
                content:"퍼질러 자기",
                data:new Date().getTime()
            },
            {
                id:2,
                isDone : false,
                content:"게임 하기",
                data:new Date().getTime()
            }
        ],
    reducers:{
        onCreate : (state, action) => {
            const newItem = {
                id : action.payload.id, //idRef.current++대신 aciton을 사용해서 넘겨줌
                isDone:false,
                content:action.payload.content, // action은 들어온 값. content에 넣어줌
                date:new Date().getTime()

            }
            return([newItem,...state]) // 배열을 풀고 다시 배열을 붙여서 넣ㅇ므
        },
        // state,targetId로 넘어온 값을 변수로 저장해도 되지만 보통 action을 씀
        onUpdate : (state, action) => {
            return(state.map(todo =>
                    todo.id == action.payload ? {...todo,isDone:!todo.isDone}:todo)
            )
        },
        onDelete : (state, action) => {
            return(state.filter((todo)=> todo.id != action.payload))
        }
    }
})

export const{onCreate, onUpdate, onDelete} = todos.actions
export default configureStore({
    reducer:{
        todos:todos.reducer
    }
})
