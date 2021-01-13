const NavBar = () => {
  return (
    <div id="header" className="header">
      <nav className="navbar navbar-expand-lg navbar-light text-capitalize">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="imgs/logo.png" alt="#" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#show-menu"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="show-menu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#hiw">
                  How it's Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#wcs">
                  What Clients Say
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item .search-container">
                <a className="nav-link search" href="#">
                  <i className="fas fa-search"></i>
                </a>
                <form>
                  <input type="search" placeholder="Search" />
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
