// js는 변수 쓸때 let 변수선언 const 상수 var는 왠만하면 쓰지않기 scope의 범위가 전체 지역변수안통함
let name = "이정재";
const pi = 2.34;
var num = 10;
name = 10;
console.log(10 / 3);
console.log(name); //system.out.prilnt 똑같음
function add(a, b) {
  return a + b; //함수
}
const result = add(10, 20);
console.log(result);
