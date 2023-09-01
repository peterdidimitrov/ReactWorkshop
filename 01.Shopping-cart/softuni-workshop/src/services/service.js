export async function getAllProducts() {
  const response = await fetch("http://localhost:3030/jsonstore/products/");
  return response.json();
}
export async function createProduct(product) {
  const response = await fetch("http://localhost:3030/jsonstore/products/", {
    method: "POST",
    body: JSON.stringify(product),
  });

  return response.json();
}
export async function buyProduct(productId, setProducts) {
  const response = await fetch(
    `http://localhost:3030/jsonstore/products/${productId}`,
    {
      method: "PATCH",
      body: JSON.stringify({ isBought: true }),
    }
  );
  getAllProducts().then((newRess) => setProducts(Object.values(newRess)));
  return response.json();
}
export async function removeProduct(productId, setProducts) {
  const response = await fetch(
    `http://localhost:3030/jsonstore/products/${productId}`,
    {
      method: "DELETE",
    }
  );
  getAllProducts().then((newRess) => setProducts(Object.values(newRess)));
  return response.json();
}
