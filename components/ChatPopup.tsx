// ChatPopup.js
import React from "react";
import Chat from "./Chat";

const ChatPopup = ({ isOpen, onClose }) => {
  return (
    <div className={`chat-popup ${isOpen ? "open" : ""}`}>
      <div className="chat-popup-content w-3/10 h-screen fixed top-0 left-0 bg-white shadow-md transform translate-x-full transition-transform ease-in-out duration-300">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <Chat />
      </div>
    </div>
  );
};

export default ChatPopup;
