import './TodoItem.css'

// 익명함수 사용 , 그냥 function써도 됨
const TodoItem = ({id,isDone,content,date,onUpdate,onDelete}) =>{
    return(
        <div className='TodoItem'>
            <input type="checkbox" checked={isDone}
                   onChange={()=>{onUpdate(id)}} />
                    {/*id가 같은것을 찾아서 onUpdate함*/}
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <button onClick={() => {onDelete(id)}}>삭제</button>
        </div>
    )
}
export default TodoItem;