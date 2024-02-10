import Modal from "react-modal";
import { useState } from "react";
import "./Button.css"; // Import your stylesheet

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

Modal.setAppElement("#root");
export default function StaticButton({ props, onClick }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <button
        className="static-button"
        onClick={() => {
          if (onClick) {
            onClick()
          }
          else {
            openModal()
          }
          if (props.clicks == 0) {
            props.updateClicks(props.clicks + 1)
          }
        }}
        style={{ backgroundColor: `${props.color}` }}
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
}
