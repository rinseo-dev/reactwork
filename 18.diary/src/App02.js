import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';
import Button from './components/Button';
import Header from './components/Header';

/*
  1. "/" : 모든 diary를 보여는 주는 페이지
  2. "/new" : diary 쓰기
  3. "/diary" : diary 상세보기
  4. "/edit" : 수정페이지

  npm i react-router-dom
*/
function App() {
  const nav = useNavigate();

  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"}/>}
        rightChild={<Button text={"Right"}/>}
      />
      
      <Button 
        text={"일반버튼"}
        onClick={()=>{console.log("일반버튼클릭")}}
      />
      <Button 
        text={"긍정버튼"}
        type={"POSITIVE"}
        onClick={()=>{console.log("긍정버튼클릭")}}
      />
      <Button 
        text={"부정버튼"}
        type={"NEGATIVE"}
        onClick={()=>{console.log("부정버튼클릭")}}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;