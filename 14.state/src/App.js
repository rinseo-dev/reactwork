import logo from './logo.svg';
import './App.css';
import Member_enroll from "./component/Member-enroll";
import Counter from "./component/Counter";
import Light_on_off from "./component/Light-on-off";

function App() {
  return (
    <div className="App">
      <Member_enroll/>
      <Counter/>
      <Light_on_off/>
    </div>
  );
}

export default App;
