const computerList = document.querySelectorAll(".computer ul li");
const humanList = document.querySelectorAll(".human ul li");
const resultList = document.querySelector(".result ul");
const appendItems = function (className) {
  const apppendItem = document.createElement("li");
  apppendItem.classList.add(className);
  apppendItem.textContent = className.substring(0, 1);
  resultList.appendChild(apppendItem);
};
let computerChoice = 0;
// function makeRandom(){
//아래꺼랑똑같음 하지만 아래꺼쓰는게
// }

const makeRandom = function () {
  computerList[0].style.display = "none";
  computerList[1].style.display = "none";
  computerList[2].style.display = "none";
  computerChoice = Math.floor(Math.random() * 3);
  computerList[computerChoice].style.display = "block";
};
let i = 0;
let gameIdx = 0;
humanList.forEach((item, idx) => {
  item.addEventListener("click", () => {
    i++;
    clearInterval(computerIdx);
    if (i >= 3) {
      clearTimeout(gameIdx);
    } else {
      gameIdx = setTimeout(() => {
        computerIdx = setInterval(makeRandom, 50);
      }, 1000);
    }

    if (idx === computerChoice) {
      //console.log("draw");
      appendItems("draw");
    } else if (idx === 0 && computerChoice === 1) {
      appendItems("lose");
    } else if (idx === 1 && computerChoice === 2) {
      appendItems("lose");
    } else if (idx === 2 && computerChoice === 0) {
      appendItems("lose");
    } else {
      appendItems("win");
    }
  });
});
let computerIdx = setInterval(makeRandom, 50); // clearInterval
makeRandom();
