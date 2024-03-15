import './Button.css'

const Button = ({text,color}) =>{
    // props로 받아도 되고 ...btnProps로 풀어서 넘겨서 text, color처럼 풀어서 받아도 됨
    return (
        /*<button style={{backgroundColor:color}} className="btn">{a}</button>*/
        <button style={{color:color}} className="btn">{text}버튼</button>
    )
}
export default Button;