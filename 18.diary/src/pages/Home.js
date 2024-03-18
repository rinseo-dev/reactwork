import Header from "../component/Header";
import Button from "../component/Button";
import DiaryList from "../component/DiaryList";
import {useContext, useState} from "react";
import {DiaryStateContext} from "../App";

const getMonthlyData = (pivotDate, data) =>{
// data에서 filter로 돌면서 해당하는 값만 return해주면 달에 해당하는 값을 가져옴

    const beginTime = new Date(
        // povitDate에 있는걸 년 월 일 시 분 초 나눠서 가져오는것
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1,
        0,
        0,
        0

    ).getTime();
    // 달의 마지막 날짜 계산
    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth()+1,
        0,
        23,
        59,
        59
    ).getTime();

    return data.filter(
        (item)=>
        beginTime <= item.createDate && item.createDate <= endTime);
}

const Home = () =>{
    const [pivotDate, setPivotDate] = useState(new Date());
    const data = useContext(DiaryStateContext); // data는 DiaryStateContext에 들어있으므로 가져옴
    const monthlyData = getMonthlyData(pivotDate,data);

    const onIncreaseMonth = () =>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }

    const onDecreaseMonth = () =>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    }

    return(
        <>
            <Header
                title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`} // localDate를 사용할 수 없으므로 +1 필수
                leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
                rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
            />
            <DiaryList data={monthlyData}/> {/*monthlyData는 배열로 들어오게 됨*/}
        </>
    )
}
export default Home;