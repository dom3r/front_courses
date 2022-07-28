const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  //const promise = new Promise((resolve, reject) => {
  return fetch(url, {
    method: method,
    body:data
   // body: JSON.stringify(data)
    // headers: {
    //   "Content-Type": "application/json",
    // },
  })
    .then((response) => {
      // fetch is already promise not like XMLHttp
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error("Something went wrong - server side!");
        });
      }
    })
    .catch((error) => {
      alert(error);
      throw new Error("Something went wrong!");
    });

  //});
}

//XML HTTP REQUEST EXAMPLE
//   const xhr = new XMLHttpRequest();

//   xhr.open(method, url);

//   xhr.responseType = "json";

//   xhr.onload = function () {
//     if(xhr.status>=200 && xhr.status <300){
//     resolve(xhr.response);
//     }
//     else{
//       reject(new Error('Something went wrong!'));
//     }
//     //const listOfPosts = JSON.parse(xhr.response);
//     // const listOfPosts = xhr.response;
//     // //console.log(listOfPosts);
//     // for(const post of listOfPosts){
//     //     const postEl = document.importNode(postTemplate.content, true);
//     //     postEl.querySelector('h2').textContent = post.title.toUpperCase();
//     //     postEl.querySelector('p').textContent = post.body;
//     //     listElement.append(postEl);
//     // }
//   };
//   xhr.onerror = function(){
//     reject(new Error('Failed to send request!'));
//   }

//   xhr.send(JSON.stringify(data));
// });
// return promise;}

async function fetchPosts() {
  // try {
  const reponseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  const listOfPosts = reponseData;
  // console.log(listOfPosts);
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector("li").id = post.id;
    listElement.append(postEl);
  }
}
//catch (error) {
//alert(error.message);
//}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  const fd = new FormData(form);
  fd.append('title',title);
  fd.append('body',content);

  fd.append('userId',userId);
  //fd.append('someFile','photo.png') // mixtrue of content, text

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", fd);
}

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;
  createPost(enteredTitle, enteredContent);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    console.log(postId);
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});

//fetchPosts();
//createPost('DUMMY','A Dummy post!');
