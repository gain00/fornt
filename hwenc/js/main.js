// const menu01 = document.querySelector(".master-piece .menu li:nth-chils(1)");
// const menu02 = document.querySelector(".master-piece .menu li:nth-chils(2)");
// const menu03 = document.querySelector(".master-piece .menu li:nth-chils(2)");
// menu01.addEventListener("click", function () {
//   //js 매개변수안에 함수가 // 클릭이란 이벤트를 function이 듣고 실행
//   alert("menu01을 눌렀습니다");
// });
// menu02.addEventListener("click", callFunc); //
// menu03.addEventListener("click", callFunc1); //

// //사용자가 이벤트를 발생시켰을때 나중에 호출된다 callback
// function callFunc() {
//   console.log("함수를 실행합니다.");
// }
// function callFunc1() {
//   console.log("함수를 실행합니다.");
// }
const gnbList = document.querySelectorAll(".gnb .list > li");
const menu = document.querySelectorAll(".master-piece .menu li");
const header = document.querySelector(".header");
gnbList.forEach(function (item, idx) {
  //item이 li하나
  item.addEventListener("mouseenter", function () {
    header.classList.add("on");
  });
  item.addEventListener("mouseleave", function () {
    header.classList.remove("on");
  });
});
// 진짜 배열은 아님.. 그러므로 배열의 메서드는 쓸수없음 유사배열
// console.log(menu);
// 일급 객체 함수를 변수에 할당할 수 있다.
// 다른 함수를 인자로 전달 받을 수 있다.
// 다른함수의ㅣ 결과로서 리턴 가능하다. js에서 함수는 데이터처럼다룰수있다
// bb(); //호출됨 다른 언어에서는 호출안됨
// aa(); //에러

// const aa = function aa() {
//   console.log("함수표현식"); //되도록 표현식으로 사용 // 값으로 만들어서 사용해라
// }; //함수정의,선언문

// function bb() {
//   console.log("함수선언문");
// }
const contentsList = document.querySelectorAll(".master-piece .contents li");
//화살표 함수 => function과 같은뜻,이름없는함수에만 사용가능
menu.forEach((item, idx) => {
  //idx는 순서가 있을때
  item.addEventListener("mouseenter", function () {
    //console.log(idx + "번째");
    contentsList.forEach((item02, idx02) => {
      // item,idx의 의미?
      item02.classList.remove("on");
    });
    const target = document.querySelector(`.master-piece .contents li:nth-child(${idx + 1})`);
    target.classList.add("on");
  });
  item.addEventListener("mouseleave", () => {
    contentsList.forEach((item02, idx02) => {
      // item,idx의 의미?
      item02.classList.remove("on");
    });
  });
});

const sum = (a, b) => {
  return a + b;
};

const sum1 = (a, b) => a + b; // 한줄표현식일땐 중괄호,리턴 생략가능
console.log = sum1(100, 200);

const double = (num) => num * 2;

// for (let i = 0; i < menu.length; i++) {
//   menu[i].addEventListener("click", function () {
//     alert(i + "번째 입니다");
//   });
// }

const mainSwiper = new Swiper(".main-visual .mask", {
  speed: 600,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".main-visual .btns .btn-next",
    prevEl: ".main-visual .btns .btn-prev",
  },
  pagination: {
    el: ".main-visual .pagination",
    type: "fraction",
  },
});

//prettier-ignore
const swiper = new Swiper(".social .mask", {
  speed: 600,
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  //loopedSlides: 10,
  navigation: {
    nextEl: ".social .btns .btn-next",
    prevEl: ".social .btns .btn-prev"
  },
  pagination: {
    el: ".social .pagination .inner",
    type: "progressbar",
  },
  //centeredSlides:true
});
