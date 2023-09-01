import { useEffect, useState } from "react";
import ShoppingCartForm from "./ShoppingCartForm";
import ShoppingCartItem from "./ShoppingCartItem";
import { buyProduct, getAllProducts, removeProduct } from "../services/service";

export default function ShoppingCart() {
  const [products, setProducts] = useState([]);

  const totalPrice = products
    .filter((product) => product.isBought)
    .reduce((acc, curr) => acc + Number(curr.cost), 0);

  useEffect(() => {
    getAllProducts().then((response) => setProducts(Object.values(response)));
  }, []);

  return (
    <section className="shopping-cart__container">
      <ShoppingCartForm setProducts={setProducts} />
      <section className="shopping-cart__items-list">
        {products.map((product) => (
          <ShoppingCartItem
            key={product._id}
            item={product}
            handleBuyItem={(productId) => buyProduct(productId, setProducts)}
            handleRemoveItem={(productId) =>
              removeProduct(productId, setProducts)
            }
            setProducts={setProducts}
          />
        ))}
      </section>
      <div className="shopping-cart__total-price">
        <h1>Total Price: {totalPrice}$</h1>
      </div>
    </section>
  );
}
