import logo from './logo.svg';
import './App.css';

function App() {
  // return문 안에서 if문을 사용하지 못하는거지 이렇게는 사용 가능함
  const isStudent=false;
  /*
  if(isStudent){
    return <h1>학생입니다</h1>
  }else {
    return <h1>학생이 아닙니다</h1>
  }
  */
  // 이렇게 축약 가능
  /*
  if(isStudent){
    return <h1>학생입니다</h1>
  }
  return <h1>학생이 아닙니다</h1>
  */
  
  // 오류 : return안에 if문 불가능
  /*
  return(
  if(isStudent){
    return <h1>학생입니다</h1>
  }
  )
  */

  // return 안에서는 if문이 안되므로 주로 삼항연산자를 사용함
  // 삼항연산자 사용 - 많이 사용됨
  /*
  return isStudent === true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>
  */

  return (
      // 문자로 인식하여 출력
      /*
      <div>
        isStudent === true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>
      </div>
       */

      // 중괄호 안에 넣어주면 삼항연산자로 인식
      <div>
          {isStudent === true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>}
      </div>
  )
}

export default App;
