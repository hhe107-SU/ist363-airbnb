// console.log("js has been loaded");
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

// "event name","callback function"
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  // console.log("clickkkkkked")
}); // end of menuBtn click

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  // console.log("clickkkkkked")
}); // end of menuBtn click

function displayCategory(category, properties) {
  const section = document.createElement('section');
  section.classList.add('section--category');

  // Create and append an h2 element for the category name
  const title = document.createElement('h2');
  title.textContent = category.label.plural;
  section.appendChild(title);

  document.body.appendChild(section);

  // properties.forEach((room) => {
  //   // create elements
  //   const roomArticle = document.createElement("article");
  //   roomArticle.classList.add("room");

  //   const roomNameElement = document.createElement("h3");
  //   roomNameElement.classList.add("room--name");
  //   roomNameElement.textContent = room.name;

  //   const roomDescriptionElement = document.createElement("p");
  //   roomDescriptionElement.classList.add("room--description");
  //   roomDescriptionElement.textContent = room.description;

  //   const roomPriceElement = document.createElement("p");
  //   roomPriceElement.textContent = `Price: ${room.price}`;

  //   const roomGuestsElement = document.createElement("p");
  //   roomGuestsElement.textContent = `Guests: ${room.guests}`;

  //   roomArticle.appendChild(roomNameElement);
  //   roomArticle.appendChild(roomDescriptionElement);
  //   roomArticle.appendChild(roomPriceElement);
  //   roomArticle.appendChild(roomGuestsElement);

  //   document.body.appendChild(roomArticle);
  // }); // end of forEach
}

const displayCategory ={category, properties} => {
  //console.log({category});
  const sectionElement = document.createElement('section');
  const sectionTitle = document.createElement('h2');
  sectionElement.classList.add('category')




  sectionTitle.textContent = category.label.plural;

  sectionElement.appendChild(sectionTitle);


  //console.log(category.label.singular);

  // 1.Filter properties
  const filteredProperties = properties.filter(property) => {

  

  //return true of false

  return category.label.singular === property.type });

  filteredProperties.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  filteredProperties.forEach(preoperty=>{

    const articleElement = document.createElement('article');
    articleElement.classList.add('property');



    let propertiesHTML = '';

    propertiesHTML += `
        <h3 class="property--name">${property.name}</h3>
        <p class="property--description">${property.description}</p>
        <p class="property--price">Price: ${property.price}</p>
    `;
Element.appendChild(articleElement);




    const propertyTitle = document.createElement('h3');

    propertyTitle.classList.add('preoprty-title');



  });






//2. Loop and append properties
  document.body.appendChild(sectionElement);



}




Promise.all([
  // fetch 1
  fetch('js/properties.json').then((response) => response.json()),
  // fetch 2
  fetch('js/categories.json').then((response) => response.json()),
])
  .then(([properties, categories]) => {
    categories.forEach((category) => {
      displayCategory(category, properties);
    });
  })
  .catch((error) => {
    console.error('There was a problem fetching the data:', error);
  });



