const coronaList = document.querySelector(".coranaList");
fetch(
  "http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=bSb6HTOW2Dh6s8nfInv4Lm0ME8G29RduttMp5EO5bID16%2BYEL3CYXjz1mj10JEs3eGgH86m6Ol4S86MkXTWv1Q%3D%3D&pageNo=1&numOfRows=500&apiType=JSON&std_day=2023-05-30"
)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);
    const items = data.items;
    items.forEach((item, idx) => {
      console.log(item.gubun + "===" + item.incDec);
      const li = document.createElement("li");
      const region = document.createElement("span");
      region.classList.add("region");
      const incDec = document.createElement("span");
      region.classList.add("incDec");
      region.textContent = item.gubun;
      incDec.textContent = item.incDec;
      li.append(region);
      li.append(incDec);
      coronaList.append(li);
    });
  });
const DatePicker = tui.DatePicker;
const DatePicker = require("tui-date-picker");

const container = document.getElementById("tui-date-picker-container");
const target = document.getElementById("tui-date-picker-target");

const instance = new DatePicker(container, {
  input: {
    element: target,
  },
});

instance.getDate();
