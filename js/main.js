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
  },
  {
    name: "Standard Room",
    price: 100,
    type: "Shared Room",
    guests: 4,
    description:
      "This is a standard room with a shared bathroom and two queen-size beds.",
  },
  {
    name: "Economy Room",
    price: 50,
    type: "Shared Room",
    guests: 6,
    description:
      "This is an economy room with a shared bathroom and three twin-size beds.",
  },
];




rooms.forEach((room) => {
  //create elements
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
  roomGuestsElement.textContent = `Guests :${room.guests}`;

  roomArticle.appendChild(roomNameElement);
  roomArticle.appendChild(roomDescriptionElement);
  roomArticle.appendChild(roomPriceElement);
  roomArticle.appendChild(roomGuestsElement);

  document.body.appendChild(roomArticle);
});


fetch("/js/properties.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // Call renderProperties with the fetched data
    renderProperties(data);
  })；
  