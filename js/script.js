const product = document.querySelector("#product");

const dataAcquisition = () => {
  fetch("https://fakestoreapi.com/products/1")
    .then(res => res.json())
    .then(json => console.log(json));
};
dataAcquisition();
