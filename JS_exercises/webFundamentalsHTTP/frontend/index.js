console.log("hhhtest");

const rootElement = document.getElementById("root");

const renderHeader = () => {
  const header = document.createElement("header");
  header.classList.add("header");

  const headerText = document.createElement("h1");
  headerText.classList.add("header-text");
  headerText.textContent = "Listings";

  rootElement.appendChild(header);
  header.appendChild(headerText);
};

const getListings = () => {
  fetch("http://localhost:3000/listings")
    .then((response) => response.json())
    .then((data) => {
      const listingContainer = createListingContainer();
      data.forEach((listing) => {
        const listingNode = createListings(listing);
        listingContainer.appendChild(listingNode);
      });

      rootElement.appendChild(listingContainer);
    });
};

const createListingContainer = () => {
  const container = document.createElement("div");
  container.classList.add("listings-container");

  return container;
};

const createListings = (listingData) => {
  const listing = document.createElement("a");
  listing.classList.add("listing");
  const image = document.createElement("img");
  image.src = listingData.imageUrl;

  listing.appendChild(image);

  const header = document.createElement("h2");
  header.classList.add("listing-header");
  header.textContent = listingData.header;

  const paragraph = document.createElement("p");
  paragraph.classList.add("listing-header");
  paragraph.textContent = listingData.description;

  const innerContainer = document.createElement("div");
  innerContainer.classList.add("listing-inner-container");

  innerContainer.appendChild(header);
  innerContainer.appendChild(paragraph);

  listing.appendChild(image);
  listing.appendChild(innerContainer);

  return listing;
};

getListings();
renderHeader();
