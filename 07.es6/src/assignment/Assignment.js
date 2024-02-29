function Assign(){
    /*
     * (구조)분해 할당
     * - 배열 분해 할당
     * - 객체 분해 할당
     *
     *  ** 객체는 {}중괄호, 배열은 []대괄호
     */

    // 배열 분해 할당
    // ES5에서
    const points = [20, 30, 40];
    const x1 = points[0];
    const y1 = points[1];
    const z1 = points[2];
    // 배열에 있는걸 각각의 변수에 담아주는걸 분해 할당 이라고 부름
    
    // ES6에서
    const [x2,y2,z2] = points;
    // ES6에서는 points배열에 있는걸 x2,y2,z2에 각각 할당해줌
    console.log(`x2=${x2},y2=${y2},z2=${z2}`);

    // 두번째 값 무시
    const [x3, ,z3] = points;
    console.log(`x3=${x3},z3=${z3}`);
    /*y3=${y3}은 존재하지 않아서 출력 불가*/

    // 첫번째 값만 가져오기( ','없어도 되고 있어도 됨)
    const [x4, , , ] = points;
    console.log(`x4=${x4}`);

    // 배열보다  더 많은 변수가 있을 때 undefined
     const[x5, , ,n5] = points;
     console.log(`n5=${n5}`); // n5엔 아무 값이 없으므로 undefined


    /* 객체 분해 할당 */
    const car = {
        model : 'k7',
        color:'black',
        year : 2024
    }

    // ES5에서 분해할당
    const model2 = car.model;
    const color2 = car.color;
    const year2 =car.year;

    // ES6 분해할당

    // 변수 이름 지정 없이 분해할당 할 때는 기존의 변수 이름이 동일해야함.
    const {model, color, year} = car;
    console.log(`model=${model},color=${color},year=${year}`);
    // 같은 키 값에 넣기

    // 키:값의 형태로 변수 이름 지정할 수 있음
    const {model:m3, color:c3, year:y3} = car;
    console.log(`model=${m3},color=${c3},year=${y3}`);


    const func1 = ({model, year}) =>{
        console.log(`func1 : model=${model},year=${year}`);
    }
    func1(car);
    // func1에서 car를 가져와서 const{model,year}=car;처럼 분해 할당 한 것과 동일함
}
export default  Assign; // index.js에서 출력