import {useParams} from "react-router-dom";
import {useState} from "react";

const Country = () =>{
    const params = useParams(); // parameter로 받음

    const [country,setCountry] = useState();
    const setInitData = async() => {
        const data = await fetchCountry(params.code);
        setCountry(data);
    }

    return(
        // <div>Country:{params.code}</div>
        // country/:code 주소에서 :code로 받은 값이 params로 Country에 넘어와서
        // {params.code}형식으로 출력해보면 code값이 표시됨

        <div>Country : {params.}</div>
    )
}
export default Country;