//배열은 그냥 []하는게편함 array쓰는거보다
//1.  주어진 단어를 하나 만든다. 배열에다 갑을 넣고 그중하나를 골라서 뿌리기
//ul에 li형태로 넣어야한다
//또다른 배열을 만들고 그 배열에 매스랜덤으로 하나를 랜덤하게 뽑아서 워드어레이에 푸쉬한다
const word = document.querySelector(".word");
const wordArray = [];
const wordList = document.querySelector(".word-list ul");
const firstWords = ["가나다", "라마바", "사아자"];
const firstWord = firstWords[Math.floor(Math.random() * firstWords.length)];

wordArray.push(firstWord);

const appendWord = (inputWord) => {
  const li = document.createElement("li");
  li.textContent = inputWord;
  wordList.append(li);
};
appendWord(firstWord);

//2.word에 글자를 입력하고 enter쳤을때 마지막 단어의 마지막 글자랑 입력한 단어의 첫글자가 같은지 따져야함

word.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    if (word.value.length === 3) {
      gsap.from(".input-box", { x: 200, duration: 2.5, ease: "elastic.out(1, 0.3)", y: -500 });
      appendWord(word.value);
      word.value = "";
    } else {
      word.value = "";
      gsap.from(".input-box", { x: 200, duration: 2.5, ease: "elastic.out(1, 0.3)", y: -500 });

      return;
    }
  }
});
