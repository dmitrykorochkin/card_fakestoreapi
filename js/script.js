const product = document.querySelector("#product");
console.log(product);

fetch("https://fakestoreapi.com/products/1")
  .then(res => res.json())
  .then(json => console.log(json));
