//console.log("js has been loaded");
const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

//"event name","callback function"
menuBtn.addEventListener("click", function () {
  mobileMenu.classList.add("active");
  // console.log("clickkkkkked")
}); //end of menuBtn click

closeBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
  // console.log("clickkkkkked")
}); //end of menuBtn click











const rooms = [
  {
    name: "Luxury Suite",
    price: 200,
    type: "Private Room",
    guests: 2,
    description:
      "This is a luxury suite with a private bathroom and a king-size bed.",
    "availability":true
  },
  {
    name: "Standard Room",
    price: 100,
    type: "Shared Room",
    guests: 4,
    description:
      "This is a standard room with a shared bathroom and two queen-size beds.",
      "availability":true
  },
  {
    name: "Economy Room",
    price: 50,
    type: "Shared Room",
    guests: 6,
    description:
      "This is an economy room with a shared bathroom and three twin-size beds.",
      "availability":true
  },
];




function renderProperties(properties) {
  properties.forEach((room) => {
    // create elements
    const roomArticle = document.createElement("article");
    roomArticle.classList.add("room");

    const roomNameElement = document.createElement("h3");
    roomNameElement.classList.add("room--name");
    roomNameElement.textContent = room.name;

    const roomDescriptionElement = document.createElement("p");
    roomDescriptionElement.classList.add("room--description");
    roomDescriptionElement.textContent = room.description;

    const roomPriceElement = document.createElement("p");
    roomPriceElement.textContent = `Price: ${room.price}`;

    const roomGuestsElement = document.createElement("p");
    roomGuestsElement.textContent = `Guests: ${room.guests}`;

    roomArticle.appendChild(roomNameElement);
    roomArticle.appendChild(roomDescriptionElement);
    roomArticle.appendChild(roomPriceElement);
    roomArticle.appendChild(roomGuestsElement);

    document.body.appendChild(roomArticle);
  }); // end of forEach
}







 
  Promise.all([
    // fetch 1
    fetch('js/properties.json').then(response => response.json()),
    // fetch 2
    fetch('js/categories.json').then(response => response.json())
    ])
    .then(([properties, categories]) => {
      categories.forEach(category => {
        displayCategory(category, properties);
      });
    })
    .catch((error) => {
      console.error("There was a problem fetching the data:", error);
    });

  const section = document.createElement('section');
  section.classList.add("section--category");
  
  // Create and append an h2 element for the category name
  const title = document.createElement('h2');
  title.textContent = category.name;
  section.appendChild(title);


  const section = document.createElement('section');
  section.classList.add("section--category");
  
  // Create and append an h2 element for the category name
  const title = document.createElement('h2');
  title.textContent = category.name;
  section.appendChild(title);
