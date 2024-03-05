let num1 = 10;
let num2 = 20;
// export default num1; // 하나만 내보내기 하는 경우

// export default num1, num2; // 이렇게는 사용할 수 없음
//export {num1,num2}; // 두개 이상을 내보내기 하는 경우

let cList =
    [
        {
            id:0,
            title:"coffee",
            content:"all zombie",
            price:6500
        },
        {
            id:1,
            title:"smoothie",
            content:"all Cafe",
            price:7000
        },
        {
            id:3,
            title:"latte",
            content:"only jeju",
            price:7500
        }
     ];
export default cList;

