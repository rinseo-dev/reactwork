import Button from "./Button";
import './DiaryList.css';
import DiaryItem from "./DiaryItem";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const DiaryList = ({data}) =>{
    const nav = useNavigate();
    const [sortType,setSortType] = useState("latest");
    const onChangeSortType = (e) => {
        setSortType(e.target.value); // e.target.value값으로 sortType값을 바꾸게 됨
    }

    const getSortData = () =>{
        return data.toSorted((a,b)=>{
            if(sortType === "oldest"){
                return a.createDate - b.createDate;
            }else{
                return b.createDate - a.createDate;
            }
        })
        // toSorted를 사용하면 원본데이터의 순서는 유지되고 불러온 데이터만 정렬됨
    }

    const sortedDate = getSortData();

    return(
        <div className="DiaryList">
            <div className="menubar">

                {/*select안에 값이 바뀌면 e.target.value값을 가져오는데
                   이 값이 latest,oldest임 이걸 가져와서 setSortType으로 가고
                   sortType값이 바뀌게됨*/}
                <select value={sortType} onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된순</option>
                </select>
                <Button onClick={()=>nav('/new')}
                        text={"새 일기 쓰기"} type={"POSITIVE"}/>
            </div>
            <div>
                {/*item을 풀어서 넘겨줌*/}
                {/*{data.map((item) => <DiaryItem {...item} key={item.id}/>)}*/}

                {/*sort된 값을 가지고 map을 돌리는 걸로 수정*/}
                {sortedDate.map((item) => <DiaryItem {...item} key={item.id}/>)}
            </div>
        </div>
    )
}

export default DiaryList;