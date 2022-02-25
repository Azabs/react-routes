import { Outlet, Link } from "react-router-dom";

//TODO: make the navbar a separate component

const Layout = () => {
  return (
    <>
      <div className="bg-primary">
        <nav className="navbar navbar-expand navbar-dark container text-light bg-primary justify-content-between">
          <h2>
            <Link className="text-light nav-link" to="/">
              Site Name
            </Link>
          </h2>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container">
        <Outlet />
      </div>

      <footer className="container-fluid text-light bg-primary text-center py-2">
        <p>©2022 Copyright: Agustín Zabalgoitia</p>
      </footer>
    </>
  );
};

export default Layout;
