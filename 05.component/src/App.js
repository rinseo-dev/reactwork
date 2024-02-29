import logo from './logo.svg';
import './App.css';

/*
  컴포넌트는 객체처럼 만들어놓고 가져와서 사용할 수 있음
   첫글자를 대문자로 해야 인식함 ex) Student(), App(), Com1()

   이 페이지에서 내보내기를 한 것은 App이므로, App에 랜더링 된 것만 출력됨.
   -> Com1, Student 둘 다 출력됨
   
   사용할 때 <Com/>처럼 바로 닫거나 <Com></Com>처럼 열,닫도 가능
*/

const user = {
    firstName : "Hong",
    lastName:"GilDong"
};

function Student(user){
    return user.firstName+" " + user.lastName;
}

function App() {
    const isStudent = 'true';
    // 조건은 문자여도 됨. 문자와 일치할경우가 true가 되므로
    // ex) const isStudent ='학생' / isStudent=='학생' ? 참값 : 거짓값
    return (
        <div className="App">
            <h1>Start React 2024_AddInEdu</h1>
            <h3>component 실습</h3>
            {isStudent ? <h4>{Student(user)}님 환영합니다</h4>:<h4>학원생이 아닙니다</h4>}
            <Com1></Com1>
            <Com1/>
            <Com1/>
        </div>
    );
}

/* Com1에 들어있는 내용을 반복시키기 위해서 return값 안에 사용했고
   <Com1/>처럼 바로 닫아서 사용할수도 있음
 */
function Com1(){
    return (
        <div>
            <h2>[THIS IS COMPONENT]</h2>
            <p>고용노동부산업구조변화대응 특화훈련</p>
            <p>과목</p>
            <ul>
                <li>java</li>
                <li>oracle</li>
                <li>spring boor</li>
                <li>react</li>
            </ul>
        </div>
    )
}

export default App;
