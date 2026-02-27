import React from "react";
import HomePageStyles from "../../components/Styles/HomeStyle.css";
const Home = () => {
  return (
    <>
      <section className="mainSection" style={HomePageStyles}>
        <article className="mainArticle" style={HomePageStyles}>
          <div className="mainDiv">
            <div className="welcomeTitle" style={HomePageStyles}>
              Welcome to Edura
            </div>
            <div className="secondDiv" style={HomePageStyles}>
              <img src="@/assets/LoginBanner.svg" alt="img" />
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
export default Home;
