function ArrowFun(){
    const func1 = function(a,b){
        return a+b;
    }
    console.log(`fun1:${func1(3,4)}`); // 콘솔에 결과값 7

    const func2 = (a,b)=>{ // 매개변수 1개이상일때는 괄호 필요, 아닐땐 생략가능
        return a+b;
    }
    console.log(`fun2:${func2(13,14)}`);

    const func3 = (a,b)=>{return a+b}
    // const func4 = (a,b)=>{a+b} // 한 줄로 할 때 return 생략 가능
    const func5 = (a,b)=> a+b // return  생략시 괄호 없어도 됨

    console.log(`fun5:${func5(3,5)}`);

    // function안에 또 function에 대한 리턴값을 두는 코드는 잘 사용하지 않음
    // 아래 result2 처럼 사용하는게 일반적
    const func6 = function(num){
        return function(value){
            return num+value;
        }
    }
    let func6Num = func6(6);
    let result = func6Num(7);
    console.log(`func6Num:${func6Num}`);
    console.log(`result: ${result}`);

    let result2 = func6(6)(7);
    // (6)은 num, (7)은 value에 들어감 - 왜???

    // func6를 아래처럼 한줄로 작성 가능
    const func7 = num => value => num+value
        // function(value)가져오는데 function, 괄호, return 생략 가능
    console.log(`func7:${func7(6)(7)}`);
}

export default ArrowFun;
// 출력을 index.js에서 했음