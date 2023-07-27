import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faSyncAlt, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { GoogleLogin } from "@react-oauth/google";

const Navbar = ({
  isSignedIn,
  onSignInSuccess,
  onSignOut,
  credits,
  profileImage,
}) => {
  const handleSignInError = () => {
    console.log("Sign-in failed");
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/">
            <h1>AI Wallpaper</h1>{" "}
          </Link>
        </div>
        <div className="navbar-right">
          {isSignedIn ? (
            <>
              <Link to="/generate">Generate Link</Link>
                <FontAwesomeIcon
                  icon={faSyncAlt}
                  size="1.5"
                  className="fa-icon"
                />
              {credits} credits left
              <button className="cta-btn">Buy Credits</button>

                {profileImage && (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="profile-image"
                  />
                )}
                {(
                    <FontAwesomeIcon icon={faSignOut} size="1x" onClick={onSignOut} className="fa-icon"/>
                )}
            </>
          ) : (
            <GoogleLogin
              onSuccess={(userData) => onSignInSuccess(userData)}
              onError={handleSignInError}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
