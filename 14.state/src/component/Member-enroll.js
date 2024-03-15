
// 이름, 생년월일, 사는곳, 소개
import {useState} from "react";
import Counter from "./Counter";

const Member_enroll = () => {
    //const [nameinput, setNameInput] = useState("");
    const [input, setInput] = useState({
        name:"",
        location:"",
        mylife:""
    });
    const onChange = (e)=>{
        console.log("e.target.name:"+e.target.value)
        //setNameInput(nameinput, e.target.value)
        setInput({
            ...input,
            [e.target.name] : e.target.value // 값을 얻어와서 name에 넣음
        })
    }

    return (
        <>
            <h1>회원가입</h1><br/><br/>
            이름 <input name="name" onChange={onChange}/><br/><br/>
            생년월일: <input type="date" name="birth" onChange={onChange}/><br/><br/>
            <select name="location" onChange={onChange}>
                <option value="">선택</option>
                <option value="seoul">서울광역시</option>
                <option value="incheon">인천광역시</option>
                <option value="busan">부산광역시</option>
            </select><br/><br/>
            <textarea name="mylife"/>
        </>
    )
}

export default Member_enroll;