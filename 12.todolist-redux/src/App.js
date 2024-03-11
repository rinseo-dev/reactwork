
import './App.css';
import Editor from "./component/Editor";
import Header from "./component/Header";
import List from "./component/List";


function App() {
    //const todos = useSelector((state) => state.todos);

  return (
    <div className="App">
      <Header/>
      <Editor/>{/*onCreate={onCreate}*/}
      <List/>{/*todos={todos} onUpdate={onUpdate} onDelete={onDelete} 필요 없음*/}
    </div>
  );
}

export default App;
