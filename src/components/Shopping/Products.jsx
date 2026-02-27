import React, { useEffect, useState } from "react";
import Styles from "../Shopping/Styles/Styling.css";
import Loader from "../Extras/Loader";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cart from "./Cart";
const Products = () => {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((res) => {
        setProducts(res);
        console.log("Products:", res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  const addToCart = (newItem) => {
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
  };
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };
  return (
    <div>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <nav
            style={{
              height: "60px",
              width: "100%",
              background: "red",
              boxShadow: "1px 0px 1px 0px black",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                color: "white",
                padding: "10px",
                textTransform: "uppercase",
              }}
            >
              <Link to="/">ShopCart</Link>
            </div>
            <Link to="/cart">
              <FaShoppingCart style={{ color: "white" }} />

              <span>{cartItems.length}</span>
            </Link>
          </nav>
          <ul className="productsList" style={Styles}>
            {products.map((i) => {
              return (
                <div
                  key={i.id}
                  style={{
                    border: "1px solid transparent",
                    boxShadow: "0 1px 1px 1px grey",
                    height: "auto",
                    width: "400px",
                    borderRadius: "5px",
                    marginTop: "5px",
                    margin: "20px",
                    padding: "18px",
                  }}
                >
                  <li>
                    <img
                      src={i.image}
                      alt={i.id}
                      style={{ height: "80px", objectFit: "contain" }}
                    />
                  </li>
                  <li>{i.id}</li>
                  <li>{i.title}</li>
                  <li>{i.category}</li>
                  <li>{i.price}</li>
                  <li></li>
                  <button
                    className="addToCartBtn"
                    style={Styles}
                    onClick={() => addToCart(i)}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              );
            })}
          </ul>
          <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
        </div>
      )}
    </div>
  );
};
export default Products;
