import {useState} from "react";
/*

const Light_on_off = () => {
    const [lightOn, setLightOn] = useState("OFF");

    return(
        <>
            <h1>전구{lightOn}</h1>
            <button onClick={()=>{
                setLightOn(
                    //lightOn == "OFF" ? setLightOn("ON") :  setLightOn("OFF");
                    lightOn === "OFF" ? "ON" : "OFF"
                )}}>켜기</button>
        </>
    )
}
*/

const Light_on_off = () => {
    const [light, setLight] = useState(false);
    return(
        <>
            {/*
            light==false
            <h1>전구OFF</h1>
            light==true
            <h1>전구ON</h1>
            -> {light == false ? <h1>전구OFF</h1> : <h1>전구ON</h1>}
            */}
            
            {light ? <h1 style={{backgroundColor:"yellow"}}>전구ON</h1> : <h1 style={{backgroundColor:"gray"}}>전구OFF</h1>}

            {/*{light ? <button>끄기</button> : <button>켜기</button>}*/}
            <button onClick={()=>{setLight(!light)}}>
                {light ? "끄기":"켜기"}
            </button>
        </>
    )
}
export default Light_on_off;