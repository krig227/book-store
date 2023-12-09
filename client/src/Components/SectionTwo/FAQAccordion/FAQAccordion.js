import React, { useRef, useState, useEffect } from "react";
import "./Index.css";
import { Link } from "react-router-dom";

const FAQAccordion = () => {
  const [faqData, setFaqData] = useState([]);
  //   const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Login");
  const [Categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  //   const [ratings, setRatings] = useState({});
  //   const [modalOpen, setModalOpen] = useState(null);
  const dropdownRef = useRef(null);

  const handleWindowResize = () => {
    if (isOpen && dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      setPosition((prevPosition) => ({
        ...prevPosition,
        width: dropdownRect.width,
      }));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/faq/all");
        if (!response.ok) {
          throw new Error("Failed to fetch FAQ data");
        }
        const data = await response.json();
        setFaqData(data);
        const uniqueCategories = Array.from(
          new Set(data.map((item) => item.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchData();

    window.addEventListener("resize", handleWindowResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  const handleDropdownClick = () => {
    if (dropdownRef.current) {
      dropdownRef.current.classList.toggle("Active-Dropdown");
    }
  };

  const [visibleAnswers, setVisibleAnswers] = useState({});

  const handleQuestionToggle = (id) => {
    setVisibleAnswers((prevVisibleAnswers) => ({
      ...prevVisibleAnswers,
      [id]: !prevVisibleAnswers[id],
    }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const toggleDropdown = () => {
    const dropdownRect = dropdownRef.current.getBoundingClientRect();
    setPosition({
      //   top: dropdownRect.top + window.scrollY,
      //   left: dropdownRect.left + window.scrollX,
      width: dropdownRect.width,
    });
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <div className="FAQ-Container">
        <div className="FAQ-Header">
          <h3>COMMON QUESTIONS</h3>
          <h4>Category</h4>
        </div>

        <div
          className="dropdown"
          onClick={handleDropdownClick}
          ref={dropdownRef}
        >
          <div className="Selected-Category" onClick={toggleDropdown}>
            {selectedCategory}
            <span className={`arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
          </div>

          {isOpen && (
            <div className="dropdown-overlay" style={position}>
              <div className="dropdown-options">
                {Categories.map((category, index) => (
                  <div
                    className="Option-Item"
                    key={index}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="Faq-Content">
          {selectedCategory && (
            <ul>
              {faqData
                .filter((category) => category.category === selectedCategory)
                .map((faq, index) => (
                  <li key={faq.qId}>
                    <Link
                      to="#"
                      className="question"
                      onClick={() => handleQuestionToggle(faq.qId)}
                    >
                      {faq.question}
                    </Link>
                    {visibleAnswers[faq.qId] && (
                      <p className="answer">{faq.answer}</p>
                    )}
                    {/* <StarRating
                    value={ratings[faq.id] || 0}
                    onChange={(rating) => handleRatingChange(faq.id, rating)}
                  />
                  <button onClick={() => openModal(faq.id)}>Submit Rating</button> */}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default FAQAccordion;
