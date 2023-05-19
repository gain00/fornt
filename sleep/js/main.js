const gnbList = document.querySelectorAll(".gnb .list >li");
const header = document.querySelector(".header");
gnbList.forEach((item, idx) => {
  item.addEventListener("mouseenter", () => {
    console.log("dddd");
    header.classList.add("on");
  });
});
header.addEventListener("mouseleave", () => {
  console.log("dddd");
  header.classList.remove("on");
});
