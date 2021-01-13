import React from "react";

const Slider = () => {
  return (
    <div id="home" className="slider">
      <div id="main_slider" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#main_slider"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#main_slider" data-slide-to="1"></li>
          <li data-target="#main_slider" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="imgs/slide1.jpg"
              alt="slider_img"
            />
            <div className="ovarlay_slide_cont">
              <h2>We love working</h2>
              <h4>Maintenance service</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classNameical Latin literature
                from 45 BC, making it over 2000 years
              </p>
              <a className="blue_bt" href="#">
                See Our Service
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="imgs/slide1.jpg"
              alt="slider_img"
            />
            <div className="ovarlay_slide_cont">
              <h2>We love working</h2>
              <h4>Maintenance service</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classNameical Latin literature
                from 45 BC, making it over 2000 years
              </p>
              <a className="blue_bt" href="#">
                See Our Service
              </a>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#main_slider"
          role="button"
          data-slide="prev"
        >
          <img src="imgs/left.png" alt="#" />
        </a>
        <a
          className="carousel-control-next"
          href="#main_slider"
          role="button"
          data-slide="next"
        >
          <img src="imgs/right.png" alt="#" />
        </a>
      </div>
    </div>
  );
};

export default Slider;
