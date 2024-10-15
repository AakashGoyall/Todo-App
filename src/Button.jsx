import React from "react";

export default function Button({ btnText, onMouseEnter, onMouseLeave, onClick }) {
  return (
    <button
      id="check-btn"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick} >
      {btnText}
    </button>
  );
}
