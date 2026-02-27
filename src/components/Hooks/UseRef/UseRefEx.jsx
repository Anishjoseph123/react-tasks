import React, { useRef } from "react";
const UseRefEx = () => {
  const inputRef = useRef(null);
  const handleFocus = (event) => {
    event.preventDefault();
    inputRef.current.focus();
  };
  return (
    <div>
      <form>
        <div>
          <input type="text" placeholder="Type Something..." ref={inputRef} />
        </div>
        <div>
          <button className="focusbtn" onClick={handleFocus}>
            Click To Focus
          </button>
        </div>
      </form>
    </div>
  );
};
export default UseRefEx;
