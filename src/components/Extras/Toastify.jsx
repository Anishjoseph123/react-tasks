import React from "react";
import { MdOutlineMessage } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNotificationCenter } from "react-toastify/addons/use-notification-center";
const Toastify = () => {
  const { notifications, clear, markAllAsRead, markAsRead } =
    useNotificationCenter();
  const notify = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-left",

      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
    });
  };
  return (
    <div>
      <p>{notifications.length}</p>
      <button
        onClick={notify}
        style={{
          height: "40px",
          width: "200px",
          backgroundColor: "blue",
          borderRadius: "5px",
          marginTop: "50px",
          marginLeft: "500px",
          color: "white",
          cursor: "pointer",
        }}
      >
        <MdOutlineMessage />
        Show Message
      </button>
      <ToastContainer />
    </div>
  );
};
export default Toastify;
