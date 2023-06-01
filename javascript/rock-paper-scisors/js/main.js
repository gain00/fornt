// 1. 컴퓨터 LI 3개중 하나만 보이게하기
// 2. 밑에 HUMAN LI 이벤트 걸기
// 3. 컴퓨터 LI를 무작위 나오게 SETINTERVAL 만들기
// 4. HUMAN LI 클릭했을때 멈추게하기 CLEARINTERVAL
// 5.승패확인하기

const computerList = document.querySelectorAll(".computer ul li");
const humanList = document.querySelectorAll(".human ul li");
const resultList = document.querySelectorAll(".result ul li");
let computerChoice = 0;
computerList[0].style.display = "none"; // 요소를 숨김 style.display
computerList[1].style.display = "none";

// humanList[0].addEventListener("click", () => {
//   //배열은 포이치문으로 가져와야한다 아니면 배열에있는 요소를 가져와야한다
//   console.log("1");
// });
humanList.forEach((item, idx) => {
  item.addEventListener("click", () => {
    console.log("1");
  });
});

const makeRandom = () => {
  computerList[0].style.display = "none";
  computerList[1].style.display = "none";
  computerList[2].style.display = "none";
  computerChoice = Math.floor(Math.random() * 3);
  computerList[computerChoice].style.display = "block";
};

let computerIdx = setInterval(makeRandom, 50); //setInterval 어떤 함수를 일정한간격으로 계속 실행시키는 함수
makeRandom();
