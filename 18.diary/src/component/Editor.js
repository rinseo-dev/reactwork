import EmotionItem from "./EmotionItem";
import './Editor.css';
import Button from "./Button";

const emotionList = [
    {
        emotionId : 1,
        emotionName : "아주나쁨"
    },
    {
        emotionId : 2,
        emotionName : "조금나쁨"
    },
    {
        emotionId : 3,
        emotionName : "놀라움"
    },
    {
        emotionId : 4,
        emotionName : "찝찝함"
    },
    {
        emotionId : 5,
        emotionName : "좋음"
    },
    {
        emotionId : 6,
        emotionName : "아주좋음"
    }
]

const Editor = () => {
    const emotionId = 5;

    return(
        <div className="Editor">
            <section className="date_section">
                <h3>날짜 선택</h3>
                <input type="date" />
            </section>
            <section className="emotion_section">
                <h3>오늘의 감정</h3>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item)=>(
                        <EmotionItem {...item} isSelected={item.emotionId === emotionId}/>
                        /*item안에 있는 emotionId와 emotionId가 같으면*/
                    ))}
                </div>
            </section>
            <section className="content_section">
                <h3>오늘의 일기</h3>
                <textarea placeholder="오늘은 어땠나요?" />
            </section>
            <section className="btn_section">
                <Button text={"취소"}/>
                <Button text={"작성"} type={"POSITIVE"}/>
            </section>
        </div>
    )
}
export default Editor;