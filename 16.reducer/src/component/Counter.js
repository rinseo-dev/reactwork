import {useReducer, useState} from "react";

function Counter(){
    // useState는 값만 변경
    //const [count,setCount] = useState(0);
    
    // 여기는 setCount가 아니라 dispatch를 사용함
    const [count,dispatch] = useReducer(reducer,0);
    //count의 값은 0, reducer는 상태가 어떻게 될지를 지정하는 것

    function reducer(state, action){ // action은 들어오는 값
        switch(action.type){
            case "INCREASE" :
                return state + action.data;
            case "DECREASE" :
                return state + action.data;
        }
    }
    const onInc = () =>{
        //setCount(count+1); // dispatch로 수정
        dispatch({type:"INCREASE",data:1}) // 타입, 값을 지정해서 넘김
    }
    const onDec = () =>{
        //setCount(count-1);
        dispatch({type:"DECREASE",data:-1})
    }
    return (
        <div>
            <h1>Counter</h1>
            <div>
                <h4>{count}</h4>
            </div>
            <div>
                <button onClick={(onInc)}>+</button>
                <button onClick={(onDec)}>-</button>
            </div>
        </div>
    )
}

export default Counter;