import {configureStore, createSlice} from "@reduxjs/toolkit";
import user2 from "./store/userSlice";

let user =  createSlice({ // 무엇을 만들지 넣고
    /*name : 'state이름',
    initialState : '값'*/
    name : 'user',
    initialState : 'Hong'
    // name과 initialState는 그대로 써야함 문법임
})

let stock = createSlice({
    name:'stock',
    initialState : [10,11,12]
})


// menu에는 배열이 있고 안에 객체가 있음 / 가져올 때 {배열 인덱스번호.객체이름}으로 가져옴
let menu= createSlice({
    name:'menu',
    initialState:[
        {id:0, name:"coffee", count:14},
        {id:1, name:"latte", count:9}

        // 장바구니에 추가해서 행이 늘어난다는건 여기 배열이 하나 늘어난다는 것
    ],
    // +버튼을 누르면 수량이 늘어남
    reducers: {
        addCount(state, action) { // action은 id값과 같음
            // 같은 값을 찾아서 번호를 반환???
            let i = state.findIndex((a) => {
                return a.id == action.payload
                // 기존의 id와 사용자가 넣은 값을 action으로 비교해서 동일하면 findIndex로 반환하는것
            })
            state[i].count++
        },

        decrease(state, action) {
            let item = state.find(item => item.id === action.payload);
            if (item) {
                // item.content += action.payload.amount;
                item.count -= 1;
            }
        },
        addCart(state, action) {
            state.push({ // state 맨 마지막에 넣을 때 'push'로 넣음
                id: action.payload.id,
                name: action.payload.title,
                count: 1
            })
        }
    }
})
export let { addCount,decrease,addCart } = menu.actions

/*
   Redux의 state를 변경하고 싶으면
   1) state함수를 만들기
   2) export하기
   3) 사용하는 곳에서는 import, dispatch()로 감싸줘야 함
 */

// 함수 (member)와 오브젝트(changeName)을 모두 내보내기 해줘야함.
let member =  createSlice({
    name : 'member',
    initialState : 'Hong',
    reducers:{
        changeName(state){ // 지금 state에는 'Hong'이 들어가있는 상황
            return 'GilDong' + state
        }//changeName를 내보내기 하면 함수처럼 사용할 수 있음
    }
})
export let { changeName } = member.actions
// 값이 달라지기 때문에 .actions를 써줘야함

// userSlice로 옮김
/*
let user2 =  createSlice({
    name : 'user2',
    initialState : {name:'Hong', age:300},
    reducers:{
        changeObj(state){ // state에는 initialState전체가 들어가있는 상황
            /!*return {name:'Go', age:35}*!/
            state.name = 'go'
        },
        changeAge(state, num){
            /!*state.age = state.age+1*!/
            /!*state.age +=1*!/
            state.age += num.payload // chageAge에 있는 num을 가져와서 넣음
            // num은 state에 없던 값임
        }
    }
})
*/
// export let { changeObj ,changeAge} = user2.actions


export default configureStore({ // 만들걸 reducer로 가져옴
    reducer : { // 여기 내부에 있는 모든게 state
        user:user.reducer,
        stock:stock.reducer,
        menu:menu.reducer,
        member : member.reducer,
        user2 : user2.reducer,
        

    }
});