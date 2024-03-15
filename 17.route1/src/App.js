
import './App.css';
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./component/Home";
import Search from "./component/Search";
import Country from "./component/Country";
import NotFound from "./component/NotFound";
// npm i react-router-dom
function App() {

    // let navigate = useNavigate();

  return (
    <div className="App">
        {/* 이건 navigate 사용
        <Nav.Link onclick={()=>{navigate('/')}}>Home</Nav.Link>*/}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/country/:code' element={<Country/>} />
          {/*country/뒤 주소에 들어간 :code값을 Search에서 param으로 받아서 출력해주게 됨*/}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/search'}>Search</Link>
            <Link to={'/country'}>Country</Link>
            {/*
            <button onClick={()=>{nav("/search")}}>search 페이지로 이동</button>
            이런 방법도 존잴함*/}
        </div>
    </div>
  );
}

export default App;
