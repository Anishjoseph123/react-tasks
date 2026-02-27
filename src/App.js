import { ThemeContext } from "@emotion/react";
import "./App.css";
// import LeafletMap from "./components/Maps/LeafletMap";
// import GoogleMaps from "./components/Maps/GoogleMaps";
// import DragnDrop from "./components/DragnDrop";
// import UsersList from "./components/APICalls/UsersList";
// import BackgroundVideo from "./components/BackgroundVideo";
// import FormData from "./components/FormData";
// import ExcelSheet from "./components/ExcelSheet";
// import Counter from "./components/Counter";
// import DragnDrop from "./components/DragnDrop";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
// import Home from "./components/routes/Home";
// import About from "./components/routes/About";
import React from "react";
import ThemeButton from "./components/Hooks/UseRef/UseContext/ThemeButton";
// import Toastify from "./components/Extras/Toastify";
// import Products from "./components/Shopping/Products";
// import Cart from "./components/Shopping/Cart";
// import FilesAndFolders from "./components/TreeView/FilesAndFolders";
// import Timer from "./components/Counter/Timer";
// import LoginLogout from "./components/ConditionalRendering/LoginLogout";
// import { ContextProvider } from "./components/Context/ContextProvider";
// import ContextConsumer from "./components/Context/ContextConsumer";
// import ParentComp from "./components/Props/ChildtoParent/ParentComp";

// import UsersListTable from "./components/APICalls/UsersListTable";
//  import ViewSnackbar from "./components/Extras/ViewSnackbar";

// import InputRef from "./components/Ref/InputRef";
// import UseRefEx from "./components/Hooks/UseRef/UseRefEx";/
const App = () => {
  return (
    <>
      <ThemeContext.Provider value="dark">
        <div>
          <ThemeButton />
        </div>
      </ThemeContext.Provider>
      {/* <ViewSnackbar/> */}
      {/* <BackgroundVideo/> */}
      {/* <ExcelSheet /> */}
      {/* <Counter /> */}

      {/* <
       /> */}
      {/* <UsersList/> */}
      {/* <UsersListTable /> */}
      {/* <LeafletMap /> */}
      {/* <GoogleMaps/> */}
      {/* <Router> */}
      {/* <NavBar /> */}
      {/* <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router> */}
      {/* <FormData /> */}
      {/* <ContextProvider>
        <div>
          <h3 style={{ textAlign: "center", color: "blue" }}>
            Context API Example.
          </h3>
          <ContextConsumer />
        </div>
      </ContextProvider> */}
      {/* <ParentComp /> */}
      {/* <LoginLogout/> */}
      {/* <InputRef/> */}
      {/* <FilesAndFolders /> */}
      {/* <Timer /> */}
      {/* <Toastify /> */}
      {/* <UseRefEx /> */}
    </>
  );
};

export default App;
// {
/* <div className="star"></div> */
// }
// {
/* <div class="typewriter-text">Hello, World!</div> */
// }
// .star {
//   width: 20px;
//   height: 20px;
//   background: linear-gradient(to right, yellow, orange, red, blue, green);
//   clip-path: polygon(
//     50% 0%,
//     61% 35%,
//     98% 35%,
//     68% 57%,
//     79% 91%,
//     50% 70%,
//     21% 91%,
//     32% 57%,
//     2% 35%,
//     39% 35%
//   );
//   animation: blink 1s infinite;
// }

// @keyframes blink {
//   0%,
//   100% {
//     opacity: 1;
//   }
//   50% {
//     opacity: 0;
//   }
// }
// .typewriter-text {
//   display: inline-block;
//   overflow: hidden;
//   border-right: 0.15em solid #000;
//   white-space: nowrap;
//   font-size: 24px;
//   animation: typing 3s steps(40) infinite;
// }

// @keyframes typing {
//   from {
//     width: 0;
//   }
//   to {
//     width: auto;
//   }
// }
// document.addEventListener("DOMContentLoaded", function () {
//   const textElement = document.querySelector(".typewriter-text");
//   const textContent = textElement.innerHTML;

//   // Remove content for animation
//   textElement.innerHTML = "";

//   // Create span elements for each character
//   for (let i = 0; i < textContent.length; i++) {
//     const span = document.createElement("span");
//     span.innerHTML = textContent.charAt(i);
//     textElement.appendChild(span);
//   }
// });
// .dot-container {
//   display: flex;
// }

// .dot {
//   width: 8px;
//   height: 8px;
//   background-color: #ccc;
//   border-radius: 50%;
//   margin: 0 5px;
//   animation: bounce 0.5s infinite alternate;
// }

// .dot:nth-child(2) {
//   animation-delay: 0.2s;
// }

// .dot:nth-child(3) {
//   animation-delay: 0.4s;
// }

// @keyframes bounce {
//   to {
//     transform: translateY(-15px);
//   }
// }

// {
/* <div class="dot-container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div> */
// }
