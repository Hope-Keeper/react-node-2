import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link " to="/">
                home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="api/users">
                Users
              </NavLink>
            </li>
            {!props.user ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="api/auth/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="api/auth/register">
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboared
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
