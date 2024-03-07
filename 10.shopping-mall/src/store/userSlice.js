import {createSlice} from "@reduxjs/toolkit";

let user2 =  createSlice({
    name : 'user2',
    initialState : {name:'Hong', age:300},
    reducers:{
        changeObj(state){ // state에는 initialState전체가 들어가있는 상황
            /*return {name:'Go', age:35}*/
            state.name = 'go'
        },
        changeAge(state, num){
            /*state.age = state.age+1*/
            /*state.age +=1*/
            state.age += num.payload // chageAge에 있는 num을 가져와서 넣음
            // num은 state에 없던 값임
        }
    }
})
export let {changeObj, changeAge} = user2.actions
export default user2;