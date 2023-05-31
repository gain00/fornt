const ldsEllipsis = document.querySelector(".lds-ellipsis");
const coronaList = document.querySelector(".coronaList ul");
const removeItem = () => {
  const imgItem = document.querySelectorAll(".coronaList ul li");
  imgItem.forEach((item, idx) => {
    item.remove();
  });
};
const loadCoronaData = async (date) => {
  removeItem();
  ldsEllipsis.classList.remove("off");
  const corona = await fetch(
    `http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=Wnus4QpirWGI56CfvzMWDIDHMRL%2FmEF%2FqTl9gwVNbRggLYTGPFIdwBy0L51B%2B27d5QRbLanNmIAxPwNvl7dKPA%3D%3D&pageNo=1&numOfRows=500&apiType=JSON&std_day=${date}`
  );
  const response = await corona.json();
  //.then((response) => response.json())
  const items = response.items;
  ldsEllipsis.classList.add("off");
  const sortedItems = _.sortBy(items, ["gubun"]); //원본을 훼손하지 않는 methos
  sortedItems.forEach((item, idx) => {
    console.log(item.gubun + "===" + item.incDec);
    const li = document.createElement("li");
    const region = document.createElement("span");
    region.classList.add("region");
    const incDec = document.createElement("span");
    incDec.classList.add("incDec");
    region.textContent = item.gubun;
    incDec.textContent = item.incDec;
    li.append(region);
    li.append(incDec);
    coronaList.append(li);
  });
  gsap.from(".coronaList ul li", { scale: 0, duration: 0.5, stagger: 0.02 });
};
const datePicker = new Lightpick({
  field: document.querySelector(".date-picker"),
  format: "YYYY-MM-DD",
  onSelect: function (date) {
    //console.log(date.format("YYYY-MM-DD"));
    loadCoronaData(date.format("YYYY-MM-DD"));
  },
});
datePicker.setDate(new Date());
//loadCoronaData("2023-05-30");

const numbers = [2, 1, 4, 3, 44, 5, 11, 88, 99, 4, 6, 78, 54, 34, 15];
console.log(numbers.sort((a, b) => a - b));
//console.log(numbers.sort((a, b) => b - a));
const chars = ["다", "나", "가", "라", "나라"];

const sortedChars = chars.sort((a, b) => {
  if (a > b) return -1;
  if (a === b) return 0;
  if (a < b) return 1;
});
console.log(chars[2]);

const animals = ["chicken", "cat", "puppy"];
const myAnimals = [...animals];
// 배열 또는 객체의 원본을 훼손하지 않고 복사해갈때 많이 사용을 한다.
animals.push("camel");
console.log(myAnimals);
let a = 100;
let b = a;
a += 100;
console.log(b + "===" + a);
const person = { name: "장성호", age: 30 };
const person02 = { nickName: "마동석", ...person }; // ... spread operator
person.name = "장동건";
console.log(person02); // 얕은 복사 (shallow copy)
