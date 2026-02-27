import React, { useEffect, useState } from "react";
const SnackBar = ({ message, onClose, position }) => {
  let [open, setOpen] = useState(false);
  useEffect(() => {
    if (message) {
      setOpen(true);
      const timer = setTimeout(() => {
        setOpen(false);
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose, open]);
  return (
    <div className={`snackbar ${open ? "show" : ""} ${position}`}>
      {message}
    </div>
  );
};
export default SnackBar;
