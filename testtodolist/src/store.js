import {configureStore, createSlice} from "@reduxjs/toolkit";

let todo = createSlice({
    name:'todo',
        initialState:
    [
        {
            id:0,
            isDone : false,
            content:"집에 가기",
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
        addTodoList(state,action){
            state.push({
                id:action.payload.id,
                isDone:false,
                content:action.payload.content,
                date:new Date().getTime()
            })
        },
        updateTodoList(state, action) {
            const {id, isDone} = action.payload;
            const targetId = state.find(todo => todo.id === id);
            if (targetId) {
                targetId.isDone = isDone;
            }
        },
        deleteTodoList(state, action) {
            const targetId = action.payload;
            return state.filter(todo => todo.id !== targetId);
        }
    }
})
export let {addTodoList, updateTodoList, deleteTodoList} = todo.actions
export default configureStore({
    reducer : {
        todo:todo.reducer
    }
})