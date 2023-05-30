Splitting();
AOS.init();
const header = document.querySelector(".header");
const span = document.querySelectorAll(".business .container .text-box .tb");
const gnbList = document.querySelectorAll(".gnb .list > li");
const imgBox = document.querySelectorAll("img-box");
const subElements = imgBox.children;
const tb1 = document.querySelector(".tb1");
const tb2 = document.querySelector(".tb2");
const tb3 = document.querySelector(".tb3");
const tb4 = document.querySelector(".tb4");
const tb5 = document.querySelector(".tb5");
const imgTxt1 = document.querySelector(".img-txt1");
const imgTxt2 = document.querySelector(".img-txt2");
const imgTxt3 = document.querySelector(".img-txt3");
const imgTxt4 = document.querySelector(".img-txt4");
const imgTxt5 = document.querySelector(".img-txt5");

gnbList.forEach(function (item, idx) {
  item.addEventListener("mouseenter", function () {
    header.classList.add("on");
  });
  header.addEventListener("mouseleave", function () {
    header.classList.remove("on");
  });
});

tb1.addEventListener("click", function () {
  imgTxt1.classList.add("on");
  imgTxt2.classList.remove("on");
  imgTxt3.classList.remove("on");
  imgTxt4.classList.remove("on");
  imgTxt5.classList.remove("on");
});
tb2.addEventListener("click", function () {
  imgTxt2.classList.add("on");
  imgTxt1.classList.remove("on");
  imgTxt3.classList.remove("on");
  imgTxt4.classList.remove("on");
  imgTxt5.classList.remove("on");
});
tb3.addEventListener("click", function () {
  imgTxt3.classList.add("on");
  imgTxt2.classList.remove("on");
  imgTxt1.classList.remove("on");
  imgTxt4.classList.remove("on");
  imgTxt5.classList.remove("on");
});
tb4.addEventListener("click", function () {
  imgTxt4.classList.add("on");
  imgTxt2.classList.remove("on");
  imgTxt3.classList.remove("on");
  imgTxt1.classList.remove("on");
  imgTxt5.classList.remove("on");
});
tb5.addEventListener("click", function () {
  imgTxt5.classList.add("on");
  imgTxt2.classList.remove("on");
  imgTxt3.classList.remove("on");
  imgTxt4.classList.remove("on");
  imgTxt1.classList.remove("on");
});
