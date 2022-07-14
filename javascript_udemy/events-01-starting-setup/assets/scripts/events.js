const button = document.querySelector("button");

// button.onclick = function(){

// };
const buttonClickHandler = (event) => {
  // alert("Button was clicked!");
  event.target.disabled = true;
  console.log(event);
};
const anotherButtonClickHandler = () => {
  console.log("This was clicked!");
};
// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler; not recomended due to 1 option

// button.addEventListener('click', buttonClickHandler) // best option

// setTimeout(()=>{
//     button.removeEventListener('click',buttonClickHandler);
// },2000);

// buttons.forEach(btn=>{
//     btn.addEventListener('mouseenter',buttonClickHandler);
// });

// window.addEventListener('scroll',event=>{
//     console.log(event);
// });

// infinite scrolling with adding elements
let curElementNumber = 0;

function scrollHandler() {
  const distanceToBottom = document.body.getBoundingClientRect().bottom;

  if (distanceToBottom < document.documentElement.clientHeight + 150) {
    const newDataElement = document.createElement("div");
    curElementNumber++;
    newDataElement.innerHTML = `<p>Element ${curElementNumber}</p>`;
    document.body.append(newDataElement);
  }
}

window.addEventListener("scroll", scrollHandler);

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector("div");
div.addEventListener("mouseenter", (event) => {
  console.log("div clicked");
  console.log(event);
});

button.addEventListener("click", function(event){
  event.stopPropagation();
  console.log("button clicked");
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

list.addEventListener("click", event => {
    //console.log(event.currentTarget);
//   event.target.classList.toggle("highlight");
    event.target.closest('li').classList.toggle("highlight");
    //form.submit();
    button.click();
    console.log(this);
});

// listItems.forEach(listItem=>{
//     listItem.addEventListener('click',event=>{
//         event.target.classList.toggle('highlight');
//     });
// });
