const contenedorProductos = document.getElementById('contenedor-productos');

function createProductElement(product) {
  const productElement = document.createElement('div');
  productElement.classList.add('col-md-6', 'col-lg-6', 'mb-4');

  const cardElement = document.createElement('div');
  cardElement.classList.add('card', 'h-100', 'shadow-sm');

  const imgElement = document.createElement('img');
  imgElement.src = product.imagen_url;
  imgElement.alt = product.nombre;
  imgElement.classList.add('card-img-top');

  const cardBodyElement = document.createElement('div');
  cardBodyElement.classList.add('card-body', 'd-flex', 'flex-column');

  const titleElement = document.createElement('h5');
  titleElement.classList.add('card-title');
  titleElement.textContent = product.nombre;

  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('card-text', 'flex-grow-1');
  descriptionElement.textContent = product.descripcion;

  const priceElement = document.createElement('p');
  priceElement.classList.add('card-text', 'text-primary');
  priceElement.innerHTML = `<strong>Precio: $${product.precio.toFixed(2)}</strong>`;

  const buttonGroupElement = document.createElement('div');
  buttonGroupElement.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mt-3');

  const counterElement = document.createElement('div');
  counterElement.classList.add('btn-group');

  const subtractButton = document.createElement('button');
  subtractButton.classList.add('btn', 'btn-sm', 'btn-outline-secondary', 'restar');
  subtractButton.textContent = '-';

  const countElement = document.createElement('span');
  countElement.classList.add('px-2', 'cantidad');
  countElement.textContent = '0';

  const addButton = document.createElement('button');
  addButton.classList.add('btn', 'btn-sm', 'btn-outline-secondary', 'sumar');
  addButton.textContent = '+';

  const addToCartButton = document.createElement('button');
  addToCartButton.classList.add('btn', 'btn-primary');
  addToCartButton.textContent = 'Agregar al carrito';

  counterElement.append(subtractButton, countElement, addButton);
  buttonGroupElement.append(counterElement, addToCartButton);

  cardBodyElement.append(titleElement, descriptionElement, priceElement, buttonGroupElement);
  cardElement.append(imgElement, cardBodyElement);
  productElement.append(cardElement);

  subtractButton.addEventListener('click', () => {
    if (parseInt(countElement.textContent) > 0) {
      countElement.textContent = parseInt(countElement.textContent) - 1;
    }
  });

  addButton.addEventListener('click', () => {
    countElement.textContent = parseInt(countElement.textContent) + 1;
  });

  return productElement;
}

fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    const productElements = data.componentes.map(product => createProductElement(product));
    const rowElements = [];

    for (let i = 0; i < productElements.length; i += 2) {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');
      rowElement.append(productElements[i], productElements[i + 1] || null);
      rowElements.push(rowElement);
    }

    rowElements.forEach(row => contenedorProductos.appendChild(row));
  })
  .catch(error => {
    console.error('Error:', error);
  });