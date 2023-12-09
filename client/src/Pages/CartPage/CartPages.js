import React from "react";
import { useSelector } from "react-redux";
import "./Index.css";

const CartPages = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subTotalCost = cartItems.reduce((total, item) => {
    return total + (item.book ? item.book.price : item.price) * item.quantity;
  }, 0);
  const taxAmount = (5 / 100) * subTotalCost;

  return cartItems.length > 0 ? (
    <div className="Cart-Container">
      <div className="Cart-LeftSide">
        <div className="Cart-LeftSide-Header">
          <h2>------------My Shopping Cart-------------</h2>
        </div>
        {cartItems.map((item) => (
          <div
            className="Cart-Content-Container"
            key={item.book ? item.book.bookId : item.bookId}
          >
            <div className="Cart-Content-Header">
              <h2>Item To be Delivered In Print</h2>
            </div>
            <div className="Cart-Book-Title">
              <h4>{item.book ? item.book.title : item.title}</h4>
            </div>
            <div className="Cart-Book-Author">
              <h4>By {item.book ? item.book.author : item.author}</h4>
            </div>
            <div className="Cart-Book-Container">
              <div className="Cart-Book-Cover">
                <img
                  className="Book-Cover-Cart"
                  src={item.book ? item.book.coverImage : item.coverImage}
                  alt="CoverImg"
                />
              </div>
              <div className="Cart-Book-Details">
                <div className="Book-Type-Cart">
                  {item.book ? item.book.booktype : item.booktype}
                </div>
                <div className="Book-Remove-buttons">
                  <button className="RemoveItem-Minicart">Remove</button>
                  <div className="Line-Cart-Remove"></div>
                  <button className="RemoveItem-Minicart">Save Later</button>
                </div>
                <div className="Book-Gift-Cart">
                  <button className="Gift-Cart-Button">Make it a Gift</button>
                </div>
                <div className="Book-DeliveryDetails-Cart">
                  <h5>
                    FREE Delivery by Thu, Dec 31 - Thu, December 29 Order within
                  </h5>
                </div>
              </div>
              <div className="Cart-Misc-Details">
                <div className="Price-Details-Cart">
                  <p>Item Price</p>
                  <p>₹ {item.book ? item.book.price : item.price}</p>
                </div>
                <div className="Quantity-Details-Cart">
                  <p>{item.quantity}</p>
                  <div className="IncDec-Cart">
                    <button className="Button-Cart-Incdec">{"\u25B2"}</button>
                    <button className="Button-Cart-Incdec">{"\u25BC"}</button>
                  </div>
                </div>
                <div className="Total-Details-Cart">
                  <p>Subtotal</p>
                  <p>
                    ₹{" "}
                    {item.book
                      ? item.book.price * item.quantity
                      : item.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="Cart-RightSide">
        <div className="Cart-Total-Right">
          <div className="Cart-Right-Header">
            <h3>Apply Discount Code</h3>
          </div>
          <div className="Discount-Cart-input">
            <input
              className="Discount-Input-Cart"
              placeholder="Enter Discount Code"
            ></input>
            <button className="Apply-Cart-Button">Apply Discount</button>
          </div>
          <div className="Cart-Order-Summary">
            <div className="Cart-Order-Header">
              <h3>Order Summary</h3>
            </div>
            <div className="Cart-Order-Content">
              <div className="Cart-Order-Subtotal  Space-Between">
                <h3>Sub Total</h3>
                <h3>₹ {subTotalCost}</h3>
              </div>
              <div className="Cart-Order-Shipping Space-Between">
                <h3>Estimated Shipping Fee</h3>
                <h3>Free</h3>
              </div>
              <div className="Cart-Order-Tax Space-Between">
                <h3>Tax</h3>
                <h3>₹ {taxAmount}</h3>
              </div>
            </div>
            <div className="Cart-Order-Total Space-Between">
              <h3>Total</h3>
              <h3>{subTotalCost + taxAmount}</h3>
            </div>
            <button className="Checkout-Button-Cart">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h3>Please add items to cart to review</h3>
  );
};

export default CartPages;
