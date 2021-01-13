import React from "react";

const Subscriptions = () => {
  return (
    <div className="subcribe">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <h3>Newsletter</h3>
            <p>
              dolor sit amet, consectetur adipiscing elit.
              <br />
              Ut elit tellus, luctus nec ullamcorper
            </p>
          </div>
          <div className="col-md-8 col-sm-6">
            <form>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
              />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
