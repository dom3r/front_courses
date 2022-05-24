//window.alert();
console.dir(window.document); // same as document
console.dir(window);

//document.getElementById(main-title)
//document.querySelectorAll(".list-item")
//document.querySelector('ul li:first-of-type')
const h1 = document.getElementById("main-title");
h1.textContent = "Some new title";
h1.style.color = "white";
h1.style.backgroundColor = "black";

const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + "(Changed)";

const body = document.body;
const listItemElements = document.querySelectorAll("li");
//const listItemElements = document.getElementsByTagName('li');//alternative
for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}

const section = document.querySelector("section");
const button = document.querySelector("button");
//section.style.backgroundColor = "blue";
section.className = "red-bg";
button.addEventListener("click", () => {
//   if (section.className === "red-bg visible") {
//     section.className="red-bg invisible";
//   } else {
//     section.className = "red-bg visible";
//   }
section.classList.toggle('visible');
section.classList.toggle('invisible');
});
