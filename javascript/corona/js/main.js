//ajax (asynchronous javascript and xml)
const thumbsList = document.querySelector(".thumbs-box ul");
const search = document.querySelector(".search");
search.addEventListener("keyup", function (e) {
  if (e.key === "Enter" || e.keyCode === 13) {
    const searchWord = search.value;
    searchImage(searchWord);
  }
});
const removeItem = () => {
  const imgItem = document.querySelectorAll(".thumbs-box ul li");
  imgItem.forEach((item, idx) => {
    item.remove();
  });
};
const searchImage = async (searchWord) => {
  // 기존 이미지없애기 li태그 없애기 remove();
  removeItem();
  fetch(`https://dapi.kakao.com/v2/search/image?query=${searchWord}`, {
    headers: {
      Authorization: "KakaoAK df47f2f00dc7d7a0ccde11917722ddb5",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data);
      const imgList = data.documents; //배열받아옴
      imgList.forEach(function (item, idx) {
        //idx 순서를 받아오는 매개변수// 배열하나하나가 다 아이템
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = item.thumbnail_url;
        li.append(img);
        thumbsList.append(li);
      });
    });
  gsap.from(".thumbsList li", { scale: 0, duration: 1, stagger: 0.02 });
};
