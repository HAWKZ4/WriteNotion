import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth"; // eslint-disable-line
import { auth, provider } from "../firebase/config"; // eslint-disable-line

export const Header = () => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  const handleLogin = () => {
    console.log("SORRY");
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     console.log(result);
    //     setIsAuth(true);
    //     localStorage.setItem("isAuth", true);
    //   })
    //   .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsAuth(false);
        console.log("Successful Logout ");
        localStorage.setItem("isAuth", false);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo img" />
        <span>WriteNotion</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>

        {isAuth ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button onClick={handleLogout} className="auth">
              <i className="bi bi-box-arrow-right"></i>
              Logout
            </button>
          </>
        ) : (
          <button disabled onClick={handleLogin} className="auth">
            <i className="bi bi-google"></i>
            Login
          </button>
        )}
      </nav>
    </header>
  );
};
