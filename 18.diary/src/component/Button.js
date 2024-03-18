import './Button.css';

/*
  - text : 버튼에 들어갈 글자
  - type : 3가지 타입 { 일반-회색버튼. 긍정버튼-연두색, 부정버튼-빨간색 }
  - onClick : 버튼이 클릭되었을 때
 */
const Button = ({text,type,onClick}) => { // 풀어서 받아온걸 아래 적용시킴
    return <button className={`Button Button_${type}`} onClick={onClick}>{text}</button>
}

export default Button;