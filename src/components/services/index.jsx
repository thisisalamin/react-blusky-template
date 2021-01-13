import React from "react";

const Services = () => {
  return (
    <div id="service" className="hiw_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h3>OUR SERVICES</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="col-md-5"></div>
        </div>
        <div className="row">
          <div className="col-md-8 service_blog">
            <img
              className="margin_top_30 img-responsive"
              src="imgs/s1.jpg"
              alt="#"
            />
            <h3 className="blog_head">Book Online</h3>
          </div>
          <div className="col-md-4 service_blog">
            <img
              className="margin_top_30 img-responsive"
              src="imgs/s2.jpg"
              alt="#"
            />
            <h3 className="blog_head">Confirmation</h3>
          </div>
          <div className="col-md-4 service_blog">
            <img
              className="margin_top_30 img-responsive"
              src="imgs/s3.jpg"
              alt="#"
            />
            <h3 className="blog_head">Work Status</h3>
          </div>
          <div className="col-md-4 service_blog">
            <img
              className="margin_top_30 img-responsive"
              src="imgs/s4.jpg"
              alt="#"
            />
            <h3 className="blog_head">Work Status</h3>
          </div>
          <div className="col-md-4 service_blog">
            <img
              className="margin_top_30 img-responsive"
              src="imgs/s5.jpg"
              alt="#"
            />
            <h3 className="blog_head">Work Status</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
