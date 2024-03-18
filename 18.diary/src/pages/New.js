import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";

const New = () =>{
    return(
        <div>
            <Header title={"새 일기 쓰기"}
                    leftChild={<Button text={"뒤로"}/>}
            />
            <Editor />
        </div>
    )
}
export default New;