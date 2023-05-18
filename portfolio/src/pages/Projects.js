import React from "react";
import Navbarfun from "../components/Navbarfun";
import Button from "react-bootstrap/Button";
import "../App.css";
export default function Projects() {
  return (
    <>
      <Navbarfun />
      <div className="app_image ">
        <div className="h-auto min-vh-100">
          <div className="container">
            <div className="row">
              <div className="col-3 m-3">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title text-center">TicTacToe</h5>
                    <p className="card-text">
                      Learned how to use state in javascript.
                    </p>
                    <a
                      class="btn btn-primary"
                      href="https://github.com/joich7/tic-tac-toe-Project"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-3 m-3">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title text-center">Weather App</h5>
                    <p className="card-text">
                      Worked with Api's on frontend for first time. Used
                      js,html,css,bootstrap.
                    </p>
                    <a
                      class="btn btn-primary"
                      href="https://github.com/joich7/weather-app"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-3 m-3">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body ">
                    <h5 className="card-title text-center">To Do List</h5>
                    <p className="card-text">First React Project</p>
                    <a
                      class="btn btn-primary"
                      href="https://github.com/joich7/to-do-list"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-3 m-3">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title text-center">React Restraunt</h5>
                    <p className="card-text ">
                      Learned how to use Api's with react
                    </p>
                    <a
                      class="btn btn-primary"
                      href="https://github.com/joich7/react-restaurant-proj"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-3 m-3">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title text-center">Budget App</h5>
                    <p className="card-text">
                      Practice using state and classes in python{" "}
                    </p>
                    <a
                      class="btn btn-primary"
                      href="https://github.com/joich7/python-Budget-App"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-3 m-3">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title text-center">Movie Maniacs</h5>
                    <p className="card-text">Full stack Imdb Clone </p>
                    <a
                      class="btn btn-primary"
                      href="https://moviemaniacs-6726e.web.app/"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
