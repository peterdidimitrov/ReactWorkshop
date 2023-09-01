import React from "react";
import { useState } from "react";
import { createProduct, getAllProducts } from "../services/service";
import { useRef } from "react";

export default function ShoppingCartForm({ setProducts }) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [imageURL, setImageURL] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    createProduct({
      name,
      cost,
      imgUrl: imageURL,
      isBought: false,
    });

    getAllProducts().then((response) => setProducts(Object.values(response)));

    setName("");
    setCost("");
    setImageURL("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="shopping-cart__form-control">
        <input
          type="text"
          name="item-name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="shopping-cart__form-control">
        <input
          type="number"
          name="item-cost"
          placeholder="Cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </div>
      <div className="shopping-cart__form-control">
        <input
          type="text"
          name="item-image"
          placeholder="Place image url here"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </div>
      <div className="shopping-cart__form-control">
        <button
          type="submit"
          disabled={name === "" || cost === "" || imageURL === ""}
        >
          <span>Add</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="cart-shopping"
            className="svg-inline--fa fa-cart-shopping "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  );
}
