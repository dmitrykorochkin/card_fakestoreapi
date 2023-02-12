const products = document.querySelector(".products");

const dataAcquisition = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    console.log(jsonData);

    jsonData.forEach(() => {
      products.innerHTML = `
        <div class="product">
          <h2 class="product__title">${jsonData[0].title}</h2>
          <img src="${jsonData[0].image}" alt="" class="product__img">
          <p class="product__description">${jsonData[0].description}</p>
      </div>
      `;
    });

};
dataAcquisition();
