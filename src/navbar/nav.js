import {
  faHome,

  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="navbar navbar-expand-lg bg-dark navbar-dark mt-1">
      <div className="container ">
        <a href="#" className="navbar-brand text-">
          Abolfazl
        </a>
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link to={"/"} className="navbar-link ">
              <FontAwesomeIcon
                icon={faHome}
                style={{ color: "white" }}
              ></FontAwesomeIcon>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to={"/shop"}>
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ color: "white" }}
              ></FontAwesomeIcon>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
