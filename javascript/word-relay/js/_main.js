//배열은 그냥 []하는게편함 array쓰는거보다
//1.  주어진 단어를 하나 만든다. 배열에다 갑을 넣고 그중하나를 골라서 뿌리기
const word = document.querySelector(".word");
const wordArray = []; //배열은 참조
const firstWords = ["강아지", "소나기", "기상청", "청소부", "부잣집", "호랑이"];
const wordList = document.querySelector(".word-list ul");
const firstWord = firstWords[Math.floor(Math.random() * firstWords.length)];
console.log("🚀 ~ file: main.js:8 ~ firstWord:", firstWord);
//코드가 겹치면 함수를 만든다
wordArray.push(firstWord);
console.log("🚀 ~ file: main.js:11 ~ wordArray:", wordArray);

const appendWord = (inputWord) => {
  const li = document.createElement("li");
  li.textContent = inputWord;
  wordList.append(li);
};

appendWord(firstWord);
//2.word에 글자를 입력하고 enter쳤을때 마지막 단어의 마지막 글자랑 입력한 단어의 첫글자가 같은지 따져야함
word.addEventListener("keyup", (e) => {
  //e는 자기자신의정보
  //keyup 키보드를 눌렀다 뗏을때 발생하는이벤트
  if (e.key === "Enter" || e.keyCode === 13) {
    if (word.value.length !== 3) {
      //alert("3글자만 입력가능합니다");
      gsap.from(".input-box", { x: 200, duration: 2.5, ease: "elastic.out(1, 0.3)", y: -500 });
      word.value = "";
      return; //함수가종료
    } else {
      const lastWord = document.querySelector(".word-list ul li:last-child").textContent;
      const lastChar = lastWord.substring(2);
      console.log(lastWord);
      if (word.value.substring(0, 1) !== lastChar) {
        word.value = "";
        return;
      }
      appendWord(word.value);
      word.value = "";
    }
  }
});
