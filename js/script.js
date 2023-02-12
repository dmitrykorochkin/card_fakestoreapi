const products = document.querySelector(".products");

const dataAcquisition = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    console.log(jsonData);

    jsonData.forEach(product => {
      products.innerHTML += `
        <div class="product">
          <h2 class="product__title">${product.title}</h2>
          <img src="${product.image}" alt="" class="product__img">
          <p class="product__description">${product.description}</p>
      </div>
      `;
    });

};
dataAcquisition();
