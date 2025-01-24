import "../style/Images.css";
import React, { useState, useEffect } from "react";

const Images = () => {
  // Dynamically create image paths for 65 images
  const imagePaths = Array.from({ length: 65 }, (_, index) => `/rangers-images/image${index + 1}.jpg`);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0); // To track the current image index

  // Open the modal and set the current image
  const openModal = (imagePath, index) => {
    setCurrentImage(imagePath);
    setCurrentIndex(index); // Set the index of the current image
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage("");
  };

  // Handle keydown events (ESC for closing modal, arrow keys for navigation)
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal(); // Close the modal on ESC key press
    } else if (event.key === "ArrowLeft") {
      // Navigate to previous image
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        setCurrentImage(imagePaths[currentIndex - 1]);
      }
    } else if (event.key === "ArrowRight") {
      // Navigate to next image
      if (currentIndex < imagePaths.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setCurrentImage(imagePaths[currentIndex + 1]);
      }
    }
  };

  // Add event listener for keydown when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, currentIndex]);

  return (
    <div className="image-gallery">
      {/* Image Gallery */}
      {imagePaths.map((image, index) => (
        <div key={index} className="image-container" onClick={() => openModal(image, index)}>
          <img src={image} alt={`image-${index + 1}`} />
        </div>
      ))}

      {/* Modal to view full-size image */}
      <div className={`modal ${isModalOpen ? "open" : ""}`} onClick={closeModal}>
        <img src={currentImage} alt="Full-size" />
      </div>
    </div>
  );
};

export default Images;
