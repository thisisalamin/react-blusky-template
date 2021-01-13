import React from "react";

const About = () => {
  return (
    <div>
      <div id="about" className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h4>ABOUT BLUESKY</h4>
              <h3>We Build for Your Comfort</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="col-md-6 offset-md-1">
              <div className="full text_align_center">
                <img className="img-responsive" src="imgs/about.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
