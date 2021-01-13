import React from "react";

const HowItWorks = () => {
  return (
    <div
      id="hiw"
      className="hiw_section layout_padding"
      style={{ background: "#1a2428" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h3 className="white_font">How it's Works</h3>
            <p className="white_font">
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
          </div>
          <div className="col-md-5"></div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img
              className="margin_top_30 img-responsive"
              src="imgs/blog1.jpg"
              alt="#"
            />
            <h3 className="blog_head">Book Online</h3>
          </div>
          <div className="col-md-4">
            <img
              className="margin_top_30 img-responsive"
              src="imgs/blog2.jpg"
              alt="#"
            />
            <h3 className="blog_head">Confirmation</h3>
          </div>
          <div className="col-md-4">
            <img
              className="margin_top_30 img-responsive"
              src="imgs/blog3.jpg"
              alt="#"
            />
            <h3 className="blog_head">Work Status</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
