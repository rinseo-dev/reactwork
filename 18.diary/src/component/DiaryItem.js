import {getEmotionImg} from "../util/get-emotion-img";
import Button from "./Button";
import './DiaryItem.css';
import {useNavigate} from "react-router-dom";

const DiaryItem = ({id, createDate,emotionId,content}) =>{
    // getEmotionImg를 가져오면 이미지를 불러오는게 됨

    //const emotionId = 3; // 명시적으로 1번으로 해둠 / 지금은 값 넘겨받아서 안씀

    const nav = useNavigate();

    return(
        <div className="DiaryItem">
            {/*<div className="img_section">*/}
            <div className={`img_section img_section_${emotionId}`}
                 onClick={()=>nav(`/diary/${id}`)}
            > {/*emotionId가 바뀔때마다 색상을 줌*/}
                <img src={getEmotionImg(emotionId)} alt=""/>
            </div>
            <div className="info_section">
                <div className="create_date">
                    {new Date(createDate).toLocaleDateString()}
                </div>
                <div className="content">{content}</div>
            </div>
            <div className="btn_section">
                <Button text={"수정하기"}
                        onClick={()=>nav(`/edit/${id}`)}
                />{/*type없으므로 일반 회색 버튼*/}
            </div>
        </div>
    )
}

export default DiaryItem;