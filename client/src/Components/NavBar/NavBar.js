import "./Index.css";
import SearchBar from "../SearchBar/SearchBar";
// import { BrowserRouter, Link } from "react-router-dom";
import { ChevronDown, CartIcon } from "../../Icons/Icon";
import FloatBar from "../FloatBar/FloatBar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showMiniCart } from "../../Actions/cartAction";

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const myAccountLink = isAuthenticated ? (
    <Link to="/account" className="Nav-Link">
      My Account
    </Link>
  ) : (
    <Link to="/login" className="Nav-Link">
      Login/Signup
    </Link>
  );
  return (
    <header>
      <FloatBar />
      <div className="Nav-Bar">
        <div className="Logo-Image">
          <Link to="/">
            <img src="Logo.svg" alt="logo" />
          </Link>
        </div>

        <SearchBar />
        <nav className="Nav-Side">
          <ul className="Nav-Side-List">
            <li>News and Blogs</li>
            <li>About Us</li>
          </ul>
        </nav>
      </div>
      <div className="Nav-Bar-Bottom">
        <nav className="Nav-Bottom">
          <ul className="Nav-Bottom-List">
            <li>
              Category Corner
              <ChevronDown />
            </li>
            <li>
              Research
              <ChevronDown />
            </li>
            <li>
              Events
              <ChevronDown />
            </li>
            <li>
              Services
              <ChevronDown />
            </li>
            <li>
              Publishing Corner
              <ChevronDown />
            </li>
          </ul>
        </nav>
      </div>
      <div className="Nav-Bottom-End">
        <ul className="Nav-Bottom-end-list">
          <Link to="/books/English" className="Nav-Link">
            <li className="Nav-Bottom-end-listitem">English</li>
          </Link>
          <Link to="/books/Tamil" className="Nav-Link">
            <li className="Nav-Bottom-end-listitem">Tamil</li>
          </Link>
          <Link to="/books/Hindi" className="Nav-Link">
            <li className="Nav-Bottom-end-listitem">Hindi</li>
          </Link>
          <Link to="/books/Telugu" className="Nav-Link">
            <li className="Nav-Bottom-end-listitem">Telugu</li>
          </Link>
          <Link to="/books/Bengali" className="Nav-Link">
            <li className="Nav-Bottom-end-listitem">Bengali</li>
          </Link>
          <Link to="/books/Kannada" className="Nav-Link">
            <li className="Nav-Bottom-end-listitem">Kannada</li>
          </Link>
          <Link to="/books/Malayalam" className="Nav-Link">
            <li className="Nav-Bottom-end-listitem">Malayalam</li>
          </Link>
          <Link to="/books/Others" className="Nav-Link">
            <li className="Nav-Bottom-end-listitem">Others</li>
          </Link>
          <div className="Nav-Bottom-End-Sidelist">
            <li className="Nav-Bottom-end-Sidelistitem">
              Book & Smile Privilege card
            </li>

            <li>{myAccountLink}</li>

            <button
              className="Cart-Primary-Three"
              onClick={() => dispatch(showMiniCart())}
            >
              <CartIcon />
              My Cart
              <span className="Cart-Circle">
                <span className="Cart-Count">
                  {" "}
                  {cartItems.reduce(
                    (total, book) => total + book.quantity,
                    0
                  )}{" "}
                </span>
              </span>
            </button>
          </div>
        </ul>
      </div>
    </header>
    // </BrowserRouter>
  );
};

export default NavBar;
