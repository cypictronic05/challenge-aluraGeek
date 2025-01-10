const productList = document.getElementById("product-list");
const form = document.getElementById("add-product-form");

// Simulación de una base de datos
let products = [];

// Renderizar productos
function renderProducts() {
  productList.innerHTML = ""; // Limpiar contenido previo
  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.className = "product";
    productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" style="width: 195px; height: 200px;">
    <h3 style="color: white; margin-bottom: 10px; text-align: left;">${product.name}</h3>
    <div style="display: flex; align-items: center; justify-content: space-between;">
      <p style="color: white; margin: 0;">$${product.price.toFixed(2)}</p>
      <button onclick="deleteProduct(${index})" style="background: none; border: none; padding: 0; cursor: pointer;">
        <img src="img/tachito.jpg" alt="Eliminar" class="trash-icon" style="width: 24px; height: 24px;">
      </button>
    </div>
  `;
  
    productList.appendChild(productCard);
  });
}

// Agregar producto (POST)
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("product-name").value;
  const price = parseFloat(document.getElementById("product-price").value);
  const image = document.getElementById("product-image").value;

  const newProduct = { name, price, image };
  products.push(newProduct); // Simular POST
  renderProducts();

  form.reset();
});

// Eliminar producto (DELETE)
function deleteProduct(index) {
  products.splice(index, 1); // Simular DELETE
  renderProducts();
}

// Obtener productos (GET)
function getProducts() {
  renderProducts(); // Simular GET
}

// Inicializar productos
getProducts();
