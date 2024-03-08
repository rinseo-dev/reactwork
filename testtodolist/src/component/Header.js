import './Editor.css'
function Header(){
    return (
        <div className="Header">
            <h3>ToDoList📋</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    )
}

export default Header;