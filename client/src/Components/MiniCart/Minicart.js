import React from "react";
import "./Index.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import {
  decreaseCartItem,
  hideMiniCart,
  increaseCartItem,
  removeFromCart,
} from "../../Actions/cartAction";
import { Link } from "react-router-dom";

const Minicart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const showMiniCart = useSelector((state) => state.cart.showMiniCart);
  const miniCartRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };

    // You can add any logic here to update your component or perform other actions
  }, [cartItems, showMiniCart]);

  const handleOutsideClick = (event) => {
    if (miniCartRef.current && !miniCartRef.current.contains(event.target)) {
      dispatch(hideMiniCart());
    }
  };

  return (
    <>
      {showMiniCart && cartItems.length > 0 ? (
        <div className="Minicart-Container" ref={miniCartRef}>
          <div className="Mini-Header"></div>
          {cartItems.map((item) => (
            <div
              className="Mini-Content"
              key={item.book ? item.book.bookId : item.bookId}
            >
              <div className="Mini-Book-Cover">
                <img
                  className="Cover-Image-Mini"
                  src={item.book ? item.book.coverImage : item.coverImage}
                  alt="Cover-Img"
                />
              </div>
              <div className="Mini-Book-Content">
                <div className="Minicart-Book-Title Spacing-between-Mini">
                  {item.book ? item.book.title : item.title}
                </div>
                <div className="Minicart-Book-Price Spacing-between-Mini">
                  ₹ {item.book ? item.book.price : item.price}
                </div>
                <div className="Minicart-Book-Type Spacing-between-Mini">
                  hardcover
                </div>
                <div className="Minicart-Book-Quantity Spacing-between-Mini">
                  <button
                    className="Mini-QuantityButton"
                    onClick={() => dispatch(decreaseCartItem(item))}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="Mini-QuantityButton"
                    onClick={() => dispatch(increaseCartItem(item))}
                  >
                    +
                  </button>
                  <button
                    className="RemoveItem-Minicart"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="Mini-Buttons-Container">
            <Link to="/cart">
              <button
                className="Mini-Goto"
                onClick={() => dispatch(hideMiniCart())}
              >
                Go To Cart
              </button>
            </Link>
            <Link to="/checkout">
              <button
                className="Mini-Checkout"
                onClick={() => dispatch(hideMiniCart())}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Minicart;
