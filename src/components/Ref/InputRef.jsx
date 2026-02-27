import React from "react";
const InputRef = () => {
  let myInput = null;
  let focusInput = (e) => {
    if (myInput) {
      e.preventDefault();
      myInput.focus();
    }
  };
  //   async function getBreweriesData() {
  //       await window
  //         .fetch("https://api.openbrewerydb.org/breweries")
  //         .then((res) => res.json())
  //         .then((data) => console.log("Breweries List:", data))
  //         .catch((error) => {
  //           console.log("error:", error);
  //         });
  //     }
  return (
    <section className="refForm">
      <article>
        <div>
          <form>
            <div>
              <input
                className="dummyField"
                type="text"
                placeholder="Enter Something.."
                ref={(input) => (myInput = input)}
              />
            </div>

            <button className="focusBtn" onClick={focusInput}>
              Focus!
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};
export default InputRef;
