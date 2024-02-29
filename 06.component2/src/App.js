import logo from './logo.svg';
import './App.css';
import MyHeader from "./MyHeader";// MyHeader파일에서 export된 이름과 동일해야함
import MyFooter from "./MyFooter"; // 확장자가 없으면 .js가 생략된 상태
import Compo1 from "./component/Compo"; // 하위폴더에 있으므로 경로'/'표시됨

function App() {
  return (
    <div className="App">
      <MyHeader/>
        <section>
            <h1>본문</h1>
            <Compo1/>
            <Compo1/>
            <Compo1/>
        </section>
        <MyFooter/>
    </div>
  );
}

export default App;
