let bandInfo;

// Put your code here
const favouriteBand = {
  name: "David Guetta",
  nationality: "France",
  genre: "Electronic",
  members: "Solo",
  formed: "1980",
  split: false,
  albums: [
    {
      name: "blabla2",
      released: 2019,
    },
    {
      name: "blabla2",
      released: 2020,
    },
  ],
};

bandInfo = `Name: ${favouriteBand.name}, Nationality: ${favouriteBand.nationality},
years active: ${favouriteBand.formed}-2022, style:${favouriteBand.genre}, 
first album: ${favouriteBand.albums[0].released}  `;

// Don't edit the code below here

let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);
