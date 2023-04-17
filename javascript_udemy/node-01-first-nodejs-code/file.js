const fs = require("fs");

fs.readFile("hello.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

fs.writeFileSync("hello.txt", "Hello from Node.js!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created successfully!");
  }
});

setTimeout(() => {
  console.log("Hello from the timeout!");
}, 2000);

const userName = "Jakub";

console.log(`Hi ${userName}!`);
