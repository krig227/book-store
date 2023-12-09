// import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import store from "./store";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import BookListing from "./Pages/BookListing/BookListing";
import BookDetails from "./Pages/BookDetails/BookDetails";
import Login from "./Pages/Login/Login";
import { Provider } from "react-redux";
import Minicart from "./Components/MiniCart/Minicart";
import CartPages from "./Pages/CartPage/CartPages";

function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <div className="Container">
          <Minicart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/:category" element={<BookListing />} />
            <Route path="/book/:bookId" element={<BookDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<CartPages />} />
          </Routes>
        </div>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
