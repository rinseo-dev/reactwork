import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
/*import {changeName, changeObj, changeAge} from "../store";*/
import{changeObj, changeAge} from "../store/userSlice";
import {addCount, decrease} from "../store";



function Cart(){

    // return값은 수정 가능함. 나머지는 문법이라 그대로 써야함
    let state = useSelector((state)=>{return state})
    console.log(state)
    console.log(state.user)
    console.log(state.stock)
    
    // 원하는 것만 가져오기
    /*let state2 = useSelector((state)=>{return state.user})*/
    // 화살표함수에서 들어오는 인자값의 매개변수가 하나면 괄호 생략 가능
    let state2 = useSelector((state) => {return state.user})

    let stock = useSelector(state => state.stock)

    let menu = useSelector(state => state.menu)
    console.log(menu)
    
    let dispatch = useDispatch()
    // useDispatch()는 요청을 전달하는 역할을 함
    //갖고 오고자 하는게 있을 때 useDispatch()를 사용함
    let member = useSelector(state=>state.member)

    return(
        <>
            {/*{member}의 장바구니*/}
            {state.user2.name}의 장바구니 (나이:{state.user2.age})
            <button onClick={() => {
                dispatch(changeAge(2))
                /*dispatch()로 감싸줘야함
                  store.js에서 changeAge(state, num)중
                  num은 state에 없던 값이므로 2를 넣은게 num값이 됨*/
            }}>나이 증가</button>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
                </thead>
                <tbody>
                {/*
                <tr>
                    <td>1</td>
                    <td>{state2}</td>
                    // state2에 넣은 값이 출력돼 나옴 state.user
                    // <td>{stock[1]}</td>{state}는 전체를 가리키는데 이걸 출력하려고 하니 오류가 남
                    <td>변경</td>
                </tr>
                <tr>
                    <td>{menu[0].id}</td>
                    <td>{menu[0].name}</td> // {배열 인덱스번호.객체이름}으로 가져옴
                    <td>{menu[0].count}</td>
                    <td>변경</td>
                </tr>
                */}
                {
                    // menu에 있는 값들이 돌면서 a에 하나씩 들어감
                    menu.map((a, i) => { // 매개변수가 1개인 경우 ()괄호,{}중괄호, return 생략 가능
                        return (
                            <tr>
                                <td>{a.id}</td>
                                <td>{menu[i].name}</td>
                                <td>{menu[i].count}</td>
                                <td>
                                    <button onClick={() => {
                                        /*dispatch(changeName())*/
                                        /*dispatch(changeObj())*/
                                        dispatch(addCount(i)) // dispatch로 가져옴
                                    }}>+
                                    </button>
                                    {' '}
                                    <button onClick={() => {
                                        dispatch(decrease(a.id)) // dispatch로 가져옴
                                    }}>-
                                    </button>
                                </td>

                            </tr>
                        )
                    })
                }
                {/*
                {
                은씨 코드
                    menu.map(obj =>
                        <tr>
                            <td>{obj.id}</td>
                            <td>{obj.name}</td>
                            <td>{obj.count}</td>
                            <td>
                                <button onClick={() => {dispatch(decrease(obj.id))}}>-</button>
                            </td>
                        </tr>
                    )
                }
                */}
                </tbody>
            </Table>
        </>
    )

}

export default Cart;

