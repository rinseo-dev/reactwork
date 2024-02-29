import logo from './logo.svg';
import './App.css';
// js는 확장자명 안써도 됨. 나머지는 확장자명 써야함

/*여기서 return값이 html로 되어 있어서 실제 실행코드는 여기 존재하는 것*/
function App() {
    // Js주석
    /* Js 주석 */
  return (
    <div className="App">{/*여러줄 일 때 최상위 태그가 있어야 한다*/}
        {/* 부모태그는 <Fragment>나 <>로 생략도 가능 */}
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <h1>App return값 안을 수정하면 바로 적용됨</h1>
      <p>export default App;이 가능하게 해줌</p>
        <p>//슬래시 주석은 불가능 {/*이 주석은 가능 */}</p>
    </div>
  );
}

export default App;
