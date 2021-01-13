import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="hiw_section layout_padding"
      style={{ background: "#eeefef" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h3>Booking Online</h3>
          </div>
          <div className="col-md-5"></div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <div className="contact-form">
              <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Type of Service" />
                <textarea placeholder="Message"></textarea>
                <input type="submit" value="SEND" />
              </form>
            </div>
          </div>
          <div className="col-md-5 text_align_center">
            <img
              className="img-responsive"
              src="imgs/man_cartoon.png"
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
