import React, { useState } from "react";
import "./App.css";
import login from "./login";
function AccordionItem({ title, neg,hoyor }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
        <span className={`accordion-icon ${isOpen ? "open" : ""}`}>^</span>
      </div>
      {isOpen && <div className="accordion-content">{neg}</div>}
      {isOpen && <div className="accordion-content">{hoyor}</div>}
    </div>
  );
}
const Items = [
  { id: 1, name: "Bata" },
  { id: 2, name: "Zaya" },
  { id: 3, name: "Chinguun" },
];

const images = [
  "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
  "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
  "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  }
  return (
    <div className="image-slider">
      <button className="slider-btn" onClick={prevSlide}>Previous</button>
      <img
        className="slider-image"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
      <button className="slider-btn" onClick={nextSlide}>Next</button>
    </div>
  );
}

function LoginLayout() {
  return (
    <div className="login-layout">
      <div className="login-left">
        <h2>Welcome</h2>
        <button className="login-button">Sign Up</button>
      </div>
      <div className="login-right">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" />
        </div>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}
function Modal({ children, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

function App() {


  const [items, setItems] = useState(Items);
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    filterItems(value);
  };

  const filterItems = (searchQuery) => {
    const filteredItems = Items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setItems(filteredItems);
  };
  

  return (
    <div className="app">
      <div className="das1">
        <h1>Dasgal1</h1>
        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={handleSearchChange}
        />
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className="das2">
        <h1>Dasgal2</h1>
        <div className="accordion-container">
          <AccordionItem
            title="1aguulah"
            neg="hool"
            hoyor="jims"
          />
          <AccordionItem
            title="2aguulah"
            neg="hunsnii nogoo"
            hoyor="undaa"
          />
        </div>
      </div>
      <das3 className="das3">
        <h1>Dasgal3</h1>
      <div className="app-container">
      <ImageSlider />
    </div>
      </das3>
      <div className="app-container">
        <h1>Dasgal4</h1>
      <LoginLayout />
    </div>
    <div className="app-container">
      <h1>Dasgal5</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Modal Content</h2>
        <p>Modal tsonh in garaad irchlee</p>
      </Modal>
    </div>
    
    </div>

  );
}

export default App;
