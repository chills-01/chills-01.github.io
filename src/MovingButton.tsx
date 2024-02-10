import React, { useState } from "react";
import Modal from 'react-modal'
import "./Button.css"; // Import your stylesheet

const MovingButton = ({ props, onClick }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [numMovements, setNumMovements] = useState(0);
  //   const [noCount, setNoCount] = useState(0);
  const [randomPosition, setRandomPosition] = useState({ x: 0, y: 0 });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
    },
  };

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  const moveButton = () => {
    if (!hasStarted) {
      setHasStarted(!hasStarted);
    }

    if (!isHovered && numMovements < 10) {
      const buttonWidth = 100; // Adjust based on button width
      const buttonHeight = 40; // Adjust based on button height

      const maxX = window.innerWidth - buttonWidth;
      const maxY = window.innerHeight - buttonHeight;

      let newX = Math.random() * maxX;
      let newY = Math.random() * maxY;

      // Recalculate if the button would go beyond the viewport
      while (newX + buttonWidth > window.innerWidth) {
        newX = Math.random() * maxX;
      }

      while (newY + buttonHeight > window.innerHeight) {
        newY = Math.random() * maxY;
      }

      setRandomPosition({ x: newX, y: newY });
      setNumMovements(numMovements + 1)
    }

    setIsHovered(!isHovered);
  };

  return (
    <>
     <button
      className={`moving-button ${isHovered ? "hovered" : ""}`}
      style={
        hasStarted
          ? {
              position: "absolute",
              left: `${randomPosition.x}px`,
              top: `${randomPosition.y}px`,
              backgroundColor: `${props.color}`,
            }
          : { backgroundColor: `${props.color}` }
      }
      onMouseEnter={moveButton}
      onMouseLeave={moveButton}
      onClick={onClick || openModal}
    >
      {props.text}
    </button>
    <Modal
    isOpen={modalIsOpen}
    style={customStyles}
    // contentLabel="Example Modal"
    onRequestClose={closeModal}
    shouldCloseOnOverlayClick={true}
  >
    <img src={`${props.gif}`} alt="" />
  </Modal>
  </>
  );
};

export default MovingButton;
