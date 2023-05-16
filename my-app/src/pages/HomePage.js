import "../App.css";
import Footer from "../components/Footer";
import Navbarfun from "../components/Navbarfun";
import React from "react";
function Homepage() {
  return (
    <>
      <Navbarfun />
      <div className="app_image ">
        <div className="h-auto min-vh-100">
          <div id="start" className="row align-items-end m-auto text-white">
            <div className="col-12 text-center">
              <div className="ms-5 ">
                <h1 className="retro-text ">
                  <span className="shadowglow">Josiah Charley</span>
                </h1>

                <h2 style={{ fontFamily: "cursive" }}>Web Developer</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container m-5 text-light ">
          <div className="row m-5 text-center justify-content-center">
            <div className="col-8 faded-Dark rounded">
              <h2 className="text-center">About Me</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                in eos soluta magni sunt est excepturi voluptatum dicta
                inventore, impedit similique, deserunt sint illo fugit magnam,
                obcaecati quasi nisi at.
              </p>
            </div>
          </div>

          <div className="row text-light text-center ">
            <div className="col-6 faded-Dark rounded ">
              <h2 className="text-center">LANGUAGES</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="col-6 faded-Dark rounded">
              <h2 className="text-center">LIBRARIES</h2>
              <ul>
                <li>Bootstrap</li>
                <li>React JS</li>
                <li>Django</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;

//<div className="App app_image">
//<Navbarfun />
//<p>Home page </p>
//<Footer />
//</div>
