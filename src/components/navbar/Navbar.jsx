import "./navbar.css";
import {
  faBars,faCross
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext ,useState} from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {

  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleClickL = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };
  
  const handleClickR = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate(window.location.href = 'https://admin-rental-service-deep-saha-401.onrender.com/users/new')
    }
  };
  const handleClickA = () => {
   
      navigate(window.location.href = 'https://admin-rental-service-deep-saha-401.onrender.com/login')
  };
  
  const handleClickH = () => {

      navigate(window.location.href = 'https://admin-rental-service-deep-saha-401.onrender.com/hotels/new')
  
  };
 
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">D.S.B Rental Service</span>
        </Link>
        {user ? (
          
          <div className="navItems">
            <div className="item">
            <img
              src={user.img}
              alt=""
              className="avatar"
            />
          </div>
          <h1>{user.username}</h1>
          
{/* ````````````````````````````````````````````` */}
          <button onClick={handleClickA} className="navButton">Admin</button>
          <button onClick={handleClickH} className="navButton">Add Home</button>

{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~` */}

        </div>
        )
          : (
          <div className="navItems">
            <button onClick={handleClickR} className="navButton">Register</button>
            <button onClick={handleClickL} className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
