// //async //await

// const Promise(function(resolve,reject){
// setTimeout(function(){
//     resolve("sucess");

// },1000);
// });
// myPromise.then(function(msg){
//     console.log(msg);
// })
// myPromise.catch(function (msg){
//     console.log(msg);
// })

const user = {
  //json
  id: "wjdwo1104",
  name: "이정재",
};

function fetchUser() {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  return qffetch(url).then((response) => {
    response.json();
  });
}
console.log(fetchUser());

async function checkName() {
  const user = await fetchUser("http://www.fdkjfd.com/user/1"); //비동기
  // async를쓰면 await를쓸수있다 그효과는 비동기를 동기로 바꾸어준다
  if (user.id === "wjdwo1104") {
    //동기
    console.log(user.name);
  }
}

//겅개적ㅇ로 실해할때 k
