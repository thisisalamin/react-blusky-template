const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer_blog_section">
                <img src="imgs/logo.png" alt="#" />
                <p style={{ marginTop: "5px" }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content..
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-12">
              <div className="item">
                <h4 className="text-uppercase">Navigation</h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Location</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="item">
                <h4 className="text-uppercase">Contact Info</h4>
                <p>
                  <strong>Corporate Office Address:</strong>
                </p>
                <p>
                  <img src="imgs/phone_icon.png" alt="#" /> 1234 River Street
                  New York, NY 36524
                </p>
                <p>
                  <strong>Customer Service:</strong>
                </p>
                <p>
                  <img src="imgs/location.png" alt="#" /> 987 654 3210
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="item">
                <h4 className="text-uppercase">Discover</h4>
                <ul>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">How It Works</a>
                  </li>
                  <li>
                    <a href="#">Subscribe</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center">
          <p>
            Copyright 2019 Design by{" "}
            <a href="https://html.design">Free Html Templates</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
