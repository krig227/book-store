import React from "react";
import "./Index.css";

const SearchBar = () => {
  return (
    <div className="Search-Box">
      <div className="Search-Container">
        <input className="Searchbar-Input" placeholder="Search..." />
        <div className="Search-Separator">IN</div>
        <div className="Search-Dropdown">
          <select className="Select-Search">
            <option>Books</option>
            <option>Genre</option>
            <option>Author</option>
            <option>Events,Workshop</option>
            <option>Newspaper,Magazines</option>
          </select>
        </div>
        <button type="submit" className="search-button">
          GO
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
