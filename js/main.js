// console.log("js has been loaded");
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');
const contentDIV = document.getElementById('content')

// "event name","callback function"
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  // console.log("clickkkkkked")
}); // end of menuBtn click

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  // console.log("clickkkkkked")
}); // end of menuBtn click

const displayCategory = (category, properties) => {
  // console.log({category});

  const sectionElement = document.createElement('section');
  sectionElement.classList.add('category');

  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = category.label.plural;

  sectionElement.appendChild(sectionTitle);

  const filteredProperties = properties.filter((property) => category.label.singular === property.type);

  filteredProperties.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  filteredProperties.forEach((property) => {
    const articleElement = document.createElement('article');
    articleElement.classList.add('property');

    const propertiesHTML = `
        <h3 class="property--name">${property.name}</h3>
        <p class="property--description">${property.description}</p>
        <p class="property--price">Price: ${property.price}</p>
    `;

    articleElement.innerHTML = propertiesHTML;
    sectionElement.appendChild(articleElement);
  });

  // 2. Loop and append properties
  contentDIV.body.appendChild(sectionElement);
};

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
