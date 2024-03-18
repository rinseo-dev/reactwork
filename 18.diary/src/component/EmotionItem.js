import {getEmotionImg} from "../util/get-emotion-img";
import './EmotionItem.css';

const EmotionItem = ({emotionId,emotionName, isSelected}) => {
    return (
        <div
            className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`
        }>
            <img src={getEmotionImg(emotionId)} className='emotion_img'/>
            <div className='emotion_name'>{emotionName}</div>
        </div>
    )
}
export default EmotionItem;