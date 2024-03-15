import './Button.css'

const Button = ({text,color}) =>{
    return (
        <button style={{backgroundColor:color}} className="btn">버튼</button>
    )
}
export default Button;